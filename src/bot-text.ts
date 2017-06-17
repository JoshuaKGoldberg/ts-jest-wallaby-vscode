import { IBotText } from "./nextbot/ibotcontent"

export let botText: IBotText = {
  _custom: {

    init: {
      button: "Get Started",
      description: "Catholic website Aleteia.org is the maker of ePaul, the world’s first evangelizing artificial intelligence. His job is to make sharing the good news fun and easy.",
      description_short: "",
      menu_buttons: [
        { title: "ePaul", callback: "SHARESTORY" },
        { title: "Manage Subscriptions", callback: "SUBSCRIPTION" }]},

    typeOfStory:
      { txt: { def: "Last question: What type of story do you want to share with them?",
              nft: "Ok. What type of article makes sense?" },
        tbtn: [
          { title: "Encouragement", callback: "HOPE" },
          { title: "Courage", callback: "FEAR" },
          { title: "Strength", callback: "SUFFERING" },
          { title: "Dreams", callback: "ASPIRATIONS" },
          { title: "Thinking of You", callback: "JUSTBECAUSE" }]},

    storiesCarousel: {
      title: "Not finding what you're looking for?",
      subtitle: "Discover more shareable stories on Aleteia.org here.",
      hope: "162377",
      fear: "162382",
      suffering: "162445",
      aspirations: "162523",
      justbecause: "162545",
      read_story: "Read Story",
      search_now: "Search Now",
      view: "View"
    },

    afterstories: 
      { txt: "Looking for something different or want to share again?",
        tbtn: [
          { title: "More for this person", callback: "MOREFORPERSON" },
          { title: "Re-start", callback: "RESTART" },
          { title: "No", callback: "NO" }]},
  },
    
    
  ////////////////////////////////////////////////////////////////////
  //////////////////////// default bot logic /////////////////////////

  intro: [
    { txt: [ "Shalom, friend! In Christ we find our consolation and peace, and wish to share it with others.",
             "Greetings! Sharing the love of Christ is easier and faster than it was in my letter-writing days.",
             "Greetings! Proverbs tell us that anxiety can weigh a heart down but “a kind word” lifts it up.",
             "Greetings! Sharing our faith with others can sometimes feel awkward or difficult.",
             "Peace be with you! It is written: ”Let each of us please our neighbor for the good, for building up.”" ] },
    { txt: [ "I am ePaul, here to give a digital assist as you seek to share the peace of Christ, beyond all understanding, with another.", 
             "I am ePaul, your fellow-worker in the digital fields of the Lord!",
             "I am ePaul. I’ll help you to find just the right “word in season” to express your support and encouragement to someone who needs it.",
             "I am ePaul and can help you find the word.",
             "I am ePaul. I am here to help you connect with others in the fellowship of faith, with just a few taps of a button." ] }, 
    { txt: "How?" },
    { img: "/assets/Jesus_Teaching.jpg" },
    { txt: "As Jesus showed us, the key is to meet people where they are...to show them how the gospel is relevant to their daily life." },
    { txt: "By connecting with people’s thoughts and feelings." }],
  
  whotoconnect: 
    { txt: { def: [ "Who are you seeking, in all faith, to build up today?",
                    "Who are you reaching out to?",
                    "Who are you trying to encourage, today?",
                    "Who are you hoping to connect with, today?",
                    "Who are you reaching out to, today, in support?" ],
             nft: "Got it. Tell me again...who are you hoping to connect with?" },
      tbtn: [
        { title: "Loved One", callback: "LOVEDONE" },
        { title: "Friend", callback: "FRIEND" },
        { title: "Acquaintance", callback: "ACQUAINTANCE" }]},

  ////////////////////////////////////////////////////////////////////
  //////////////////////////// LOVED ONE /////////////////////////////
  ////////////////////////////////////////////////////////////////////

  lovedone: 
    { txt: "Wonderful! How old are they?",
      tbtn: [
        { title: "18-24", callback: "AGE1824" },
        { title: "25-54", callback: "AGE2554" },
        { title: "55+", callback: "AGE55PLUS" }]},

  lovedone_age1824: [
    { txt: "Excellent! This is a crucial time to reach people about their faith." },
    { img: "/assets/loved_one_18_24.jpg" }],

  lovedone_age1824_hope: [
    { txt: "There is little that is more rewarding than giving a young person a sense of hope." },
    { txt: "Here are 4 stories on Aleteia.org that may work." }],
  lovedone_age1824_fear: [
    { txt: "Entering adulthood can be frightening. Here are 4 stories on Aleteia.org that they might offer courage." }],
  lovedone_age1824_suffering: [
    { txt: "It's terrible to see young people suffering. Here are 4 stories on Aleteia.org that may help." }],
  lovedone_age1824_aspirations: [
    { txt: "Ah, an age full of exciting opportunities -- that can feel very challenging!" },
    { txt: "Here are 4 perspectives on Aleteia.org that they might valuable." }],
  lovedone_age1824_justbecause: [
    { txt: "At any age, people appreciate knowing that someone is thinking about them." },
    { txt: "Here are 4 perspectives on Aleteia.org that they might find intriguing." }],


  lovedone_age2554: [
    { txt: "I see. We grow and change so much during this time of our lives." },
    { img: "/assets/loved_one_25_54.jpg" }],

  lovedone_age2554_hope: [
    { txt: "Messages of hope can inspire a sense of peace and joy. Here are 4 Aleteia.org articles that may fit." }],
  lovedone_age2554_fear: [
    { txt: "Anxiety, stress and doubt seem to really hit at this time of life." },
    { txt: "Here are 4 stories on Aleteia.org that they might offer courage." }], 
  lovedone_age2554_suffering: [
    { txt: "It's not uncoming for this age to experience depression, loss, and anger." },
    { txt: "Here are 4 stories on Aleteia.org that may promote healing." }],
  lovedone_age2554_aspirations: [
    { txt: "During these \"striving years\", its important to remember what really matters." },
    { txt: "Here are 4 perspectives on Aleteia.org that they might appreciate." }],
  lovedone_age2554_justbecause: [
    { txt: "These can be challenging years. Here are 4 articles Aleteia.org that may just let them know you care." }],


  lovedone_age55plus: [
    { txt: "Ok. Values and faith are increasingly on their minds." },
    { img: "/assets/loved_one_55plus.jpg" }],

  lovedone_age55plus_hope: [
    { txt: "Messages of hope can inspire a sense of peace and joy." },
    { txt: "Here are 4 Aleteia.org articles that may fit." }],    
  lovedone_age55plus_fear: [
    { txt: "Anxiety, stress and doubt seem to really hit at this time of life." },
    { txt: "Here are 4 stories on Aleteia.org that they might offer courage." }],
  lovedone_age55plus_suffering: [
    { txt: "Your thinking of them at this time shows a generous spirit." },
    { txt: "Here are 4 stories on Aleteia.org that may help." }],
  lovedone_age55plus_aspirations: [
    { txt: "Life dreams at this age are drastically different from our youth." },
    { txt: "Here are 4 perspectives on Aleteia.org that they might appreciate." }],
  lovedone_age55plus_justbecause: [
    { txt: "As we mature, it's especially welcome to know that someone is thinking of us and reaching out. Here are 4 articles Aleteia.org that may just let them know you care." }],

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////// FRIEND ///////////////////////////

//  "friend": 
//     { "msg": "Terrific! I have a feeling they will appreciate this. How old are they?",
//       "qrbtn": [
//         { "title": "18-24", "payload": "AGE1824" },
//         { "title": "25-54", "payload": "AGE2554" },
//         { "title": "55+", "payload": "AGE55PLUS" }]},

//   "friend_age1824": [
//     { "msg": "I see. Its great that you're looking out for those closest to you." },
//     { "pic": "/assets/friend_18_24.jpg" }],

//   "friend_age1824_story": 
//     { "msg": "Last question: What type of story do you want to share with them?",
//       "qrbtn": [
//         { "title": "Encouragement", "payload": "HOPE" },
//         { "title": "Courage", "payload": "FEAR" },
//         { "title": "Strength", "payload": "SUFFERING" },
//         { "title": "Dreams", "payload": "ASPIRATIONS" },
//         { "title": "Thinking of You", "payload": "JUSTBECAUSE" }]},
//   "friend_age1824_story_nft": 
//     { "msg": "Ok. What type of article makes sense?",
//       "qrbtn": [
//         { "title": "Encouragement", "payload": "HOPE" },
//         { "title": "Courage", "payload": "FEAR" },
//         { "title": "Strength", "payload": "SUFFERING" },
//         { "title": "Dreams", "payload": "ASPIRATIONS" },
//         { "title": "Thinking of You", "payload": "JUSTBECAUSE" }]},

//   "friend_age1824_hope": [
//     { "msg": "Sometimes offering a bit of hope can be the simplest and best thing we can do as friends." },
//     { "msg": "Here are 4 stories on Aleteia.org that might do the trick." }],
//   "friend_age1824_fear": [
//     { "msg": "This time of life is not always care-free. Here are 4 stories on Aleteia.org that they might give courage." }],
//   "friend_age1824_suffering": [
//     { "msg": "During this difficult time, hopefully sharing one of these 4 Aleteia.org stories will just let them know you're aware." }],
//   "friend_age1824_aspirations": [
//     { "msg": "As Christians, we can offer a fresh perspective on what matters on our road ahead. Here are 4 perspectives on Aleteia.org that might have an impact." }],
//   "friend_age1824_justbecause": [
//     { "msg": "Very nice. Here are 4 articles Aleteia.org that may simply let them know you care." }],

//   "friend_age2554": [
//     { "msg": "Got it. Its great that you're reaching out at this hectic time." },
//     { "pic": "/assets/friend_25_54.jpg" }],
    
//   "friend_age2554_story": 
//     { "msg": "Last question: What type of story do you want to share with them?",
//       "qrbtn": [
//         { "title": "Encouragement", "payload": "HOPE" },
//         { "title": "Courage", "payload": "FEAR" },
//         { "title": "Strength", "payload": "SUFFERING" },
//         { "title": "Dreams", "payload": "ASPIRATIONS" },
//         { "title": "Thinking of You", "payload": "JUSTBECAUSE" }]},
//   "friend_age2554_story_nft": 
//     { "msg": "Ok. What type of article makes sense?",
//       "qrbtn": [
//         { "title": "Encouragement", "payload": "HOPE" },
//         { "title": "Courage", "payload": "FEAR" },
//         { "title": "Strength", "payload": "SUFFERING" },
//         { "title": "Dreams", "payload": "ASPIRATIONS" },
//         { "title": "Thinking of You", "payload": "JUSTBECAUSE" }]},

//   "friend_age2554_hope": [
//     { "msg": "A simple message of hope can change the course of their day." },
//     { "msg": "Here are 4 stories on Aleteia.org that might do the trick." }],
//   "friend_age2554_fear": [
//     { "msg": "I remember this time of my life; a lot of anxiety, stress and doubt." },
//     { "msg": "Here are 4 stories on Aleteia.org that they might offer them courage." }], 
//   "friend_age2554_suffering": [
//     { "msg": "We all have a turn at suffering. It's great that you're letting them know you care. Hopefully sharing one of these 4 Aleteia.org stories will help them see beyond." }],
//   "friend_age2554_aspirations": [
//     { "msg": "Life can really get in the way of what is truly important." },
//     { "msg": "Here are 4 perspectives on Aleteia.org that might knock the rust off." }],
//   "friend_age2554_justbecause": [
//     { "msg": "It's great to take a moment to let them know you're thinking of them." },
//     { "msg": "Here are 4 articles Aleteia.org they may appreciate." }],

//   "friend_age55plus": [
//     { "msg": "Wonderful! I hope this gives them a pleasant surprise." },
//     { "pic": "/assets/friend_55plus.jpg" }],

//   "friend_age55plus_story": 
//     { "msg": "Last question: What type of story do you want to share with them?",
//       "qrbtn": [
//         { "title": "Encouragement", "payload": "HOPE" },
//         { "title": "Courage", "payload": "FEAR" },
//         { "title": "Strength", "payload": "SUFFERING" },
//         { "title": "Dreams", "payload": "ASPIRATIONS" },
//         { "title": "Thinking of You", "payload": "JUSTBECAUSE" }]},
//   "friend_age55plus_story_nft": 
//     { "msg": "Ok. What type of article makes sense?",
//       "qrbtn": [
//         { "title": "Encouragement", "payload": "HOPE" },
//         { "title": "Courage", "payload": "FEAR" },
//         { "title": "Strength", "payload": "SUFFERING" },
//         { "title": "Dreams", "payload": "ASPIRATIONS" },
//         { "title": "Thinking of You", "payload": "JUSTBECAUSE" }]},

//   "friend_age55plus_hope": [
//     { "msg": "Got it. Even when we've figured a lot of things out, we still need some peace and joy in our lives." },
//     { "msg": "Here are 4 stories on Aleteia.org that might do the trick." }],    
//   "friend_age55plus_fear": [
//     { "msg": "Doubt, stress and anxiety don't go away as we mature." },
//     { "msg": "Here are 4 stories on Aleteia.org that they might give courage." }],
//   "friend_age55plus_suffering": [
//     { "msg": "The cross becomes very real in our lives as we age." },
//     { "msg": "Here are 4 stories on Aleteia.org that may help." }],
//   "friend_age55plus_aspirations": [
//     { "msg": "A joyful life never stops dreaming. Here are 4 articles on Aleteia.org I think might fit." }],
//   "friend_age55plus_justbecause": [
//     { "msg": "God loves when we spread our love. Here are 4 articles on Aleteia.org that might really appreciate." }],




//  "acquaintance": [
//     { "msg": "Nice job!" },
//     { "msg": "This one can be tricky. How old are they?",
//       "qrbtn": [
//         { "title": "18-24", "payload": "AGE1824" },
//         { "title": "25-54", "payload": "AGE2554" },
//         { "title": "55+", "payload": "AGE55PLUS" }]}],

//   "acquaintance_age1824": [
//     { "msg": "Excellent! This is a crucial time to share faith in a friendly way." },
//     { "pic": "/assets/acquaintance_18_24.jpg" }],

//   "acquaintance_age1824_story": 
//     { "msg": "Last question: What type of story do you want to share with them?",
//       "qrbtn": [
//         { "title": "Encouragement", "payload": "HOPE" },
//         { "title": "Courage", "payload": "FEAR" },
//         { "title": "Strength", "payload": "SUFFERING" },
//         { "title": "Dreams", "payload": "ASPIRATIONS" },
//         { "title": "Thinking of You", "payload": "JUSTBECAUSE" }]},
//   "acquaintance_age1824_story_nft": 
//     { "msg": "Ok. What type of article makes sense?",
//       "qrbtn": [
//         { "title": "Encouragement", "payload": "HOPE" },
//         { "title": "Courage", "payload": "FEAR" },
//         { "title": "Strength", "payload": "SUFFERING" },
//         { "title": "Dreams", "payload": "ASPIRATIONS" },
//         { "title": "Thinking of You", "payload": "JUSTBECAUSE" }]},

//   "acquaintance_age1824_hope": [
//     { "msg": "Encouraging an acquaintance to be hopeful is a very Christian thing to do." },
//     { "msg": "Here are 4 stories on Aleteia.org that might do the trick." }],
//   "acquaintance_age1824_fear": [
//     { "msg": "Everyone battles fear. Here are 4 stories on Aleteia.org I think can give courage." }],
//   "acquaintance_age1824_suffering": [
//     { "msg": "It is terrific that you're thinking of them at this time. Here are 4 stories on Aleteia.org that may help." }],
//   "acquaintance_age1824_aspirations": [
//     { "msg": "We are all on a journey to our best lives and our best selves." },
//     { "msg": "Here are 4 perspectives on Aleteia.org that they might valuable." }],
//   "acquaintance_age1824_justbecause": [
//     { "msg": "You go, evangelist!" },
//     { "msg": "Here are 4 articles on Aleteia.org that might welcome." }],

//   "acquaintance_age2554": [
//     { "msg": "Got it. It's important that we share something accessible and interesting." },
//     { "pic": "/assets/acquaintance_25_54.jpg" }],

//   "acquaintance_age2554_story": 
//     { "msg": "Last question: What type of story do you want to share with them?",
//       "qrbtn": [
//         { "title": "Encouragement", "payload": "HOPE" },
//         { "title": "Courage", "payload": "FEAR" },
//         { "title": "Strength", "payload": "SUFFERING" },
//         { "title": "Dreams", "payload": "ASPIRATIONS" },
//         { "title": "Thinking of You", "payload": "JUSTBECAUSE" }]},
//   "acquaintance_age2554_story_nft": 
//     { "msg": "Ok. What type of article makes sense?",
//       "qrbtn": [
//         { "title": "Encouragement", "payload": "HOPE" },
//         { "title": "Courage", "payload": "FEAR" },
//         { "title": "Strength", "payload": "SUFFERING" },
//         { "title": "Dreams", "payload": "ASPIRATIONS" },
//         { "title": "Thinking of You", "payload": "JUSTBECAUSE" }]},

//   "acquaintance_age2554_hope": [
//     { "msg": "Sharing our message of peace and joy can be very powerful." },
//     { "msg": "Here are 4 stories on Aleteia.org that might do the trick." }],
//   "acquaintance_age2554_fear": [
//     { "msg": "We all wrestle with fear." },
//     { "msg": "Here are 4 articles on Aleteia.org I think offer courage." }], 
//   "acquaintance_age2554_suffering": [
//     { "msg": "I think it is terrific that you're thinking of them at this time." },
//     { "msg": "Here are 4 stories on Aleteia.org that may help right now." }],
//   "acquaintance_age2554_aspirations": [
//     { "msg": "We are all on our own personal life journey." },
//     { "msg": "Here are 4 perspectives on Aleteia.org they might appreciate." }],
//   "acquaintance_age2554_justbecause": [
//     { "msg": "Thank you for being a brave evangelist!" },
//     { "msg": "Here are 4 articles on Aleteia.org that could get their attention." }],

//   "acquaintance_age55plus": [
//     { "msg": "Ok. It's normal for everyone to be thinking about the big picture at this time." },
//     { "pic": "/assets/acquaintance_55plus.jpg" }],

//   "acquaintance_age55plus_story": 
//     { "msg": "Last question: What type of story do you want to share with them?",
//       "qrbtn": [
//         { "title": "Encouragement", "payload": "HOPE" },
//         { "title": "Courage", "payload": "FEAR" },
//         { "title": "Strength", "payload": "SUFFERING" },
//         { "title": "Dreams", "payload": "ASPIRATIONS" },
//         { "title": "Thinking of You", "payload": "JUSTBECAUSE" }]},
//   "acquaintance_age55plus_story_nft": 
//     { "msg": "Ok. What type of article makes sense?",
//       "qrbtn": [
//         { "title": "Encouragement", "payload": "HOPE" },
//         { "title": "Courage", "payload": "FEAR" },
//         { "title": "Strength", "payload": "SUFFERING" },
//         { "title": "Dreams", "payload": "ASPIRATIONS" },
//         { "title": "Thinking of You", "payload": "JUSTBECAUSE" }]},

//   "acquaintance_age55plus_hope": [
//     { "msg": "Sharing our message of hope is a very Christian thing to do." },
//     { "msg": "Here are 4 stories on Aleteia.org they might really appreciate." }],    
//   "acquaintance_age55plus_fear": [
//     { "msg": "Its normal to experience fear as we mature." },
//     { "msg": "Here are 4 stories on Aleteia.org I think offer a message of courage." }],
//   "acquaintance_age55plus_suffering": [
//     { "msg": "It is terrific that you're thinking of them at this time." },
//     { "msg": "Here are 4 stories on Aleteia.org that may help." }],
//   "acquaintance_age55plus_aspirations": [
//     { "msg": "Our personal journey really comes into perspective at this stage of life." },
//     { "msg": "Here are 4 perspectives on Aleteia.org that they might appreciate." }],    
//   "acquaintance_age55plus_justbecause": [
//     { "msg": "I'm impressed! Thank you for being a brave evangelist." },
//     { "msg": "Here are 4 stories on Aleteia.org that I think will be welcome while also letting them know you're thinking of them." }],

  afterstories_no: 
    { txt: "Okay. I hope I was helpful." },








  // "feed": [
  //   { "msg": "By the way, I can also help to feed your faith." }],

  // "feed_subscription":
  //   { "msg": "Are you interested in receiving the Top Aleteia.org Stories each week?",
  //     "qrbtn": [{ "title": "Yes", "payload": "TOP_STORIES_SUB" },
  //               { "title": "No", "payload": "NO" }] },
      
  // "feed_subscription_wsod":
  //   { "msg": "How about for you? Are you interested in subscribing to my updates?",
  //     "qrbtn": [{ "title": "Saint of the Day", "payload": "SAINT_OF_THE_DAY_SUB" },
  //               { "title": "Top Stories of the Week", "payload": "TOP_STORIES_SUB" }] },

  // "feed_subscription_top_sub": [
  //   { "msg": "Got it. Hopefully I can give your more stories you can easily share." },
  //   { "msg": "In case you're interested, here are last week's top stories." }],
  // "feed_subscription_top_sub_b": [
  //   { "msg": "Great! Here are this week's Top Stories." }],

  // "feed_subscription_sod_sub": [
  //   { "msg": "Excellent! I've noted it." },
  //   { "msg": "In case you didn't know, this is today's patron saint." }],

  // "feed_subcription_manage": [
  //   { "msg": "I can change or stop these messages at any time. Just press \"Manage Subscriptions\" button" }],

  // "feed_subscription_managemenu_top_sub": [
  //   { "msg": "Subscription management options",
  //     "qrbtn": [{ "title": "+ Top Stories of the Week", "payload": "TOP_STORIES_SUB"}]} ],
  // "feed_subscription_managemenu_top_uns": [
  //   { "msg": "Subscription management options",
  //     "qrbtn": [{ "title": "- Top Stories of the Week", "payload": "TOP_STORIES_UNS"}]} ],
  // "feed_subscription_managemenu_wsod_top_sub_sod_sub": [
  //   { "msg": "Subscription management options",
  //     "qrbtn": [{ "title": "+ Top Stories of the Week", "payload": "TOP_STORIES_SUB"},
  //               { "title": "+ Saint of the Day", "payload": "SAINT_OF_THE_DAY_SUB"}]} ],
  // "feed_subscription_managemenu_wsod_top_sub_sod_uns": [
  //   { "msg": "Subscription management options",
  //     "qrbtn": [{ "title": "+ Top Stories of the Week", "payload": "TOP_STORIES_SUB"},
  //               { "title": "- Saint of the Day", "payload": "SAINT_OF_THE_DAY_UNS"}]} ],
  // "feed_subscription_managemenu_wsod_top_uns_sod_sub": [
  //   { "msg": "Subscription management options",
  //     "qrbtn": [{ "title": "- Top Stories of the Week", "payload": "TOP_STORIES_UNS"},
  //               { "title": "+ Saint of the Day", "payload": "SAINT_OF_THE_DAY_SUB"}]} ],
  // "feed_subscription_managemenu_wsod_top_uns_sod_uns": [
  //   { "msg": "Subscription management options",
  //     "qrbtn": [{ "title": "- Top Stories of the Week", "payload": "TOP_STORIES_UNS"},
  //               { "title": "- Saint of the Day", "payload": "SAINT_OF_THE_DAY_UNS"}]} ],


  // "feed_subscription_uns": [
  //   { "msg": "Got it. You will no longer receive these messages." }],

  // "feed_subscription_no": [
  //   { "msg": "I understand. I am always here if you change your mind." },
  //   { "msg": "Thank you for doing your part to share the good news." }]
}