import React from 'react'
import Card from './Card'

function Instock() {
    return (
        <div className="feed">
            <Card month={'JUN'} date={27} pic={'https://images.unsplash.com/photo-1580813162079-12db984b0952?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxzaG9lc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
            <Card month={'APR'} date={24} pic={'https://images.unsplash.com/photo-1474633677830-f3973595d573?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxzaG9lc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
            <Card month={'OCT'} date={19} pic={'https://images.unsplash.com/photo-1514996242687-4d78a2f38ad4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHNob2VzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
            <Card month={'FEB'} date={7} pic={'https://images.unsplash.com/photo-1609535765688-c2114a1f0e50?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHNob2VzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
            <Card month={'SEP'} date={21} pic={'https://images.unsplash.com/photo-1574009709841-7e4781f5afef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHNob2VzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
            <Card month={'NOV'} date={21} pic={'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
        </div>
    )
}

export default Instock
