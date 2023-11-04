import React from 'react'
import styles from './Home.module.scss'
import { Grid, Typography } from '@mui/material'
import Header from '../../components/header/Header'
import ViewScreenTable from '../../components/tables/viewScreenTable/ViewScreenTable'
import data from '../../data/homeData/data.json'
import HeadingText from '../../components/headingText/HeadingText'
import ViewCard from '../../components/dashboard/viewCard/ViewCard'
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { TbTicket } from 'react-icons/tb';
import MeetingSchedule from '../../components/tables/meetingSchedule/MeetingSchedule'
import TodayNotClockIn from '../../components/tables/todayNotClockIn/TodayNotClockIn'

const Home = () => {
    const data2 = [
        {
            "id": 1,
            "img": <AiOutlineUsergroupAdd fontSize={35} />,
            "label": "Total",
            "title": "Staff",
            "total": 4,
            "color": "yellow"
        },
        {
            "id": 2,
            "img": <TbTicket fontSize={35} />,
            "label": "Total",
            "title": "Ticket",
            "total": 8,
            "color": "blue"
        },
        {
            "id": 3,
            "img": <AiOutlineUsergroupAdd fontSize={35} />,
            "label": "Total",
            "title": "Account Balance",
            "total": 10,
            "color": "yellow"
        },
        {
            "id": 4,
            "img": <TbTicket fontSize={35} />,
            "label": "Total",
            "title": "Jobs",
            "total": 2,
            "color": "blue"
        },
        {
            "id": 5,
            "img": <AiOutlineUsergroupAdd fontSize={35} />,
            "label": "Total",
            "title": "Active Jobs",
            "total": 40,
            "color": "yellow"
        },
        {
            "id": 5,
            "img": <TbTicket fontSize={35} />,
            "label": "Total",
            "title": "Inactive Jobs",
            "total": 4,
            "color": "yellow"
        }
    ]
    return (
        <Grid className={styles.homeContainer}>
            <Header />
            <HeadingText
                heading={'Dashboard'}
            />
            <Grid container spacing={2} className={styles.viewCard}>
                {data2.map((item) => {
                    return (
                        <Grid item sm={4}>
                            <ViewCard
                                image={item.img}
                                label={item.label}
                                title={item.title}
                                total={item.total}
                            // bgColor={item.color}
                            />
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container className={styles.meetingAndClockIn}>
                <Grid>
                    <MeetingSchedule
                        data={data.meetingSchedule}
                    />
                </Grid>
                <Grid>
                    <TodayNotClockIn
                        data={data.todayNotClockIn}
                    />
                </Grid>
            </Grid>
            <ViewScreenTable
                data={data}
            />
        </Grid>
    )
}

export default Home