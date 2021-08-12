import React from 'react'
import Card from './Card'

function Upcoming() {
    return (
        <div className="feed">
            <Card month={'JUN'} date={27} pic={'https://images.unsplash.com/photo-1584633155097-19e7753dba76?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2VzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
            <Card month={'APR'} date={24} pic={'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg'} />
            <Card month={'OCT'} date={19} pic={'https://cdn.pixabay.com/photo/2016/01/19/18/02/skateboard-1150036__340.jpg'} />
            <Card month={'FEB'} date={7} pic={'https://cdn.pixabay.com/photo/2016/11/19/15/58/camera-1840054__340.jpg'} />
            <Card month={'SEP'} date={21} pic={'https://cdn.pixabay.com/photo/2016/01/19/18/02/skateboard-1150036__340.jpg'} />
            <Card month={'NOV'} date={21} pic={'https://cdn.pixabay.com/photo/2020/05/03/19/09/nike-5126389__340.jpg'} />
        </div>
    )
}

export default Upcoming
