import React, {useEffect, useState} from 'react';
import {ApiClient, useTranslation} from "adminjs";
import Card from "../../ui/Card";
import Menu from "../../ui/Menu";

const api = new ApiClient();

const MenuContent = ({icon, label}) => {

    return (

        <div className="flex items-center gap-2">

			<span className={'text-2xl'}>

				{icon}

			</span>

            <span>{label}</span>

        </div>

    )

}


const Dashboard = () => {

    const {translateMessage} = useTranslation()

    const [data, setData] = useState({})
    useEffect(() => {
        api.getDashboard().then((response) => {
            setData(response.data);
        });
    }, [])


    return(
        // <Box>
        //    <Box position='relative' overflow='hidden'>
        //        <Box bg='grey20' height={284} py={74} px={['default', 'lg', 250]}>
        //            <Text textAlign="center" color="primary100">
        //                 <H2>Title</H2>
        //                 <Text opacity='0.8'>Subtitle</Text>
        //            </Text>
        //        </Box>
        //    </Box>
        //     <Box
        //         mt={['xl', 'xl', '-80px']}
        //         mb="xl"
        //         mx={[0,0,0, 'auto']}
        //         px={['default', 'lg', 'xxl', '0']}
        //         position='relative'
        //         flex
        //         flexDirection='row'
        //         flexWrap='wrap'
        //         width={[1,1,1,1024]}
        //     >
        //         <Box width={[1,1/2,1/2]} p='lg'>
        //             <TaskType/>
        //         </Box>
        //         <Box width={[1,1/2,1/2]} p='lg'>
        //            <TaskEffort/>
        //         </Box>
        //     </Box>
        // </Box>
        <>
            <div className="h-full flex flex-auto flex-col justify-between">
                <main className="h-full">
                    <div className="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:px-8">
                        <div className="flex flex-col gap-4 h-full">
                            <div>
                                {/* Dynamic Content here */}
                                <h4 className="mb-1 font-bold">Hello, Osmel Martinez</h4>
                                <p>You have 5 tasks on hand.</p>
                            </div>

                            <div>
                                <div>
                                    <Card>
                                        <h5 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>Card title</h5>
                                        <p>
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card's content.
                                        </p>
                                    </Card>
                                </div>
                                <Menu>

                                </Menu>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-4">
                                <div className="flex flex-col gap-4 flex-auto">
                                    <div className="card card-border">
                                        <div className="card-body">
                                            <div
                                                className="flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4">
                                                <h4>Task Overview</h4>
                                                <div className="segment">
                                                    <button
                                                        className="segment-item segment-item-default h-9 px-3 py-2 text-sm">Monthly
                                                    </button>
                                                    <button
                                                        className="segment-item segment-item-default segment-item-active h-9 px-3 py-2 text-sm">Weekly
                                                    </button>
                                                    <button
                                                        className="segment-item segment-item-default h-9 px-3 py-2 text-sm">Daily
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <div className="flex gap-2">
                                                        <div><h5 className="font-bold">213</h5><p>Total Tasks</p></div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-x-6">
                                                    <div className="flex gap-2"><span
                                                        className="badge-dot bg-indigo-600 mt-2.5"></span>
                                                        <div><h5 className="font-bold">126</h5><p>On Going</p></div>
                                                    </div>
                                                    <div className="flex gap-2"><span
                                                        className="badge-dot bg-emerald-500 mt-2.5"></span>
                                                        <div><h5 className="font-bold">87</h5><p>Finished</p></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}


export default Dashboard;
