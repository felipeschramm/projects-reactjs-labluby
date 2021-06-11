import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {id:'q1', author:'Max', text:'Learning react'},
    {id:'q2', author:'Maxaiai', text:'Learning react is something'},
    {id:'q3', author:'Maxuiui', text:'Learning react is cool'},

]

const AllQuotes = () =>{
    return <QuoteList quotes = {DUMMY_QUOTES}/>
}

export default AllQuotes