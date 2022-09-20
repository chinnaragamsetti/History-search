import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class App extends Component {
  state = {searchInput: '', finalHistoryList: initialHistoryList}

  onChangeInput = event => {
    const {searchInput} = this.state
    const entered = event.target.key
    this.setState({searchInput: entered})
  }

  onDelete = () => {
    const {finalHistoryList} = this.state

    const remainingLists = finalHistoryList.filter(each => !each.id)

    this.setState({finalHistoryList: remainingLists})
  }

  render() {
    const {searchInput, finalHistoryList} = this.state
    const searchedList = finalHistoryList.filter(each =>
      each.title.includes(searchInput),
    )

    const searchedLsitLength = searchedList.legth
    const isFoundedList = searchedLsitLength > 0

    onFoundedList = () => {
      ;<ul className="innerbodyContainer">
        {searchedList.map(each => (
          <li key={each.id} className="eachlistcontainer">
            <p className="time">{each.timeAccessed}</p>
            <img src={each.logoUrl} className="imageicon" alt="icon" />
            <p className="time">{each.title}</p>
            <p className="site">{each.domainUrl}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="deleteicon"
              onClick={this.onDelete}
            />
          </li>
        ))}
      </ul>
    }

    return (
      <>
        <div className="header">
          <h1 className="headerheading">History</h1>
          <div className="searchiconcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="searchicon"
            />
          </div>
          <input
            type="text"
            value={searchInput}
            onChangeInput={this.onChangeInput}
          />
        </div>

        <div className="body">
          {isFoundedList ? (
            this.onFounded()
          ) : (
            <p className="results">No results found</p>
          )}
        </div>
      </>
    )
  }
}

export default App

