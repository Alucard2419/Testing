// import React, {useState, useEffect} from 'react';
//
//
// import {ApiClient} from "adminjs";
//
// import _ from 'lodash'
// import {Card} from '../styles';
// import {H5, Text} from '@adminjs/design-system';
// import {Chart} from 'react-google-charts';
//
//
//
// export const data = [
//     ["Task", "Hours per Day"],
//     ["Work", 11],
//     ["Eat", 2],
//     ["Commute", 2],
//     ["Watch TV", 2],
//     ["Sleep", 7],
// ];
//
// const api = new ApiClient();
//
// const makeChartData = (records) => {
//     const status = {
//         backlog: 'Backlog',
//         doing: "Running",
//         done: 'Ready',
//         approved: 'Approved',
//         rejected: 'Rejected'
//     };
//     const values = _.groupBy(records, (record) => record.params.status)
//
// }
//
// const TaskType = () => {
//
//     const [chartData, setChartData] = useState('[]');
//     const [loading, setLoading] = useState(true);
//     const [isEmpty, setIsEmpty] = useState(true);
//
//     useEffect(() => {
//
//         (async () => {
//             // const api_response = await api.resourceAction(
//             //     {
//             //         resourceId: 'api_service',
//             //         actionName: 'getUsersFollowers',
//             //     }
//             // );
//             console.log('apiResponse');
//
//             // setChartData;
//             // setIsEmpty();
//             // setLoading();
//
//         })();
//
//     }, [])
//
//     return(
//         <Card as='a' href="#">
//             <Text textAlign="center">
//                 <H5>Titular</H5>
//                 <Text>
//                     <Chart
//                         chartType="PieChart"
//                         data={data}
//                         width={"100%"}
//                         height={"100%"}
//                     />
//                 </Text>
//             </Text>
//         </Card>
//     )
// }
//
// export default  TaskType
