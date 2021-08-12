import React from 'react'
import Card from './Card'

function Feed() {
    return (
        <div className="feed">
            <Card month={'MAR'} date={7} pic={'https://images.unsplash.com/photo-1584545284372-f22510eb7c26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'} />
            <Card month={'MAR'} date={9} pic={'https://images.unsplash.com/photo-1625572897280-4a4bed31f017?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNob2VzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
            <Card month={'FEB'} date={29} pic={'https://images.unsplash.com/photo-1624006389438-c03488175975?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNob2VzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
            <Card month={'JAN'} date={17} pic={'https://images.unsplash.com/photo-1573875133340-0b589f59a8c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHNob2VzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
            <Card month={'APR'} date={21} pic={'https://images.unsplash.com/photo-1620487552541-9a4cbefa2a3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHNob2VzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
            <Card month={'DEC'} date={30} pic={'https://images.unsplash.com/photo-1615204318936-5fb910ff2de3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxzaG9lc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
        </div>
    )
}

export default Feed
