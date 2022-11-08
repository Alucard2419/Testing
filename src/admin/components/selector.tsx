import React, {useState, useEffect, FC} from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {ApiClient, BasePropertyProps} from "adminjs";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const apiClient = new ApiClient();

const Selector: FC = (props: BasePropertyProps) => {

    const { record, property, where } = props;
    const [list, setlist] = useState(property.props["list"] || []);
    const [listmarked, setlistmarked] = useState([]);
    const [btndisable, setDisable] = useState(true);
    function setMark(list) {
        setDisable(false);
        setlistmarked(list);
    }
    useEffect(() => {
        async function getNames() {
            const response = await apiClient.resourceAction({
                resourceId: property.resourceId,
                actionName: property.props.getAction,
                params: { id: record.id },
            });
            setlist(response.data.list);
            setlistmarked(response.data.listMark);
            return response.data;
        }
        getNames();
        return () => {};
    }, []);
    const sendRequest = async () => {
        const data = {
            toSave: property.name,
            id: record.id,
            list: listmarked.map((value) => value.id),
        };
        const response = await apiClient.resourceAction({
            resourceId: property.resourceId,
            actionName: "SaveData",
            params: { data: JSON.stringify(data) },
        });
    };

    const name = property.label || "Campo";
    const placeholder = property.props["placeholder"] || "...";

    async function handlerSave() {
        // event.preventDefault();
        await sendRequest();
        setDisable(true);
    }
    return (
        <span>
      {record.id !== null ? (
          <Stack spacing={2} direction="row">
              <Autocomplete
                  style={{ marginBottom: "20px" }}
                  fullWidth
                  multiple
                  id="tags-outlined"
                  options={list}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.name}
                  value={listmarked}
                  onChange={(event, value, description) => {
                      setMark(value);
                  }}
                  isOptionEqualToValue={(option, value) => {
                      return option.id === value.id;
                  }}
                  renderInput={(params) => (
                      <TextField
                          {...params}
                          variant="standard"
                          label={name}
                          placeholder={placeholder}
                      />
                  )}
                  disabled={where !== "edit"}
              />
              {where === "edit" ? (
                  <Button
                      style={{ margin: "10px" }}
                      disabled={btndisable}
                      onClick={() => handlerSave()}
                  >
                      Save
                  </Button>
              ) : null}
          </Stack>
      ) : null}
    </span>
    );
};

export default Selector;

