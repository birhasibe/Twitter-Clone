import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
    <div className='widgets__input'>
 <SearchIcon className='widgets__searchIcon'/>
<input placeholder='Search Twitter' type="text"></input>
    </div>
<div className='widgets__widgetContainer'>
  <h2>What's Happening?</h2>

<TwitterTweetEmbed tweetId='1600057581598302211'></TwitterTweetEmbed>
<TwitterTimelineEmbed
  sourceType='profile'
  screenName='clevergazi'
  options={{height:400}}
/>
<TwitterShareButton
  url='https://facebook.com/cleverprogrammer'
  options={{ text: "#React.js is awesome" , via: "clevergazi"}}
/>

</div>
</div>
  )
}

export default Widgets
