import { IBotLogic } from "./nextbot/ibotcontent"

const botLogicBase: IBotLogic = {
  start: { next: 'intro' },
  intro: { next: 'whotoconnect', params: {txt: 'def'} },

  whotoconnect: {
    LOVEDONE: { next: 'lovedone' },
    FRIEND: { next: 'friend' },
    ACQUAINTANCE: { next: 'acquaintance' }
  },

  ////////////////////////////////////////////////////////////////////
  //////////////////////////// LOVED ONE /////////////////////////////
  ////////////////////////////////////////////////////////////////////

  lovedone: {
    AGE1824: { next: 'lovedone_age1824' },
    AGE2554: { next: 'lovedone_age2554' },
    AGE55PLUS: { next: 'lovedone_age55plus' }
  },

  lovedone_age1824: { next: 'idle' }

  // lovedone_age1824: { func: 'typeOfStory', 
  //   params: [{txt: 'def'}, 'lovedone', 'age1824'] },

  // lovedone_age1824_hope: {next: "lovedone_age1824_hope_carousel"},
  // lovedone_age1824_hope_carousel: {func: 'storiesCarousel', param: ["loved-one", "18-24", "hope"]},
  // lovedone_age1824_fear: {next: "lovedone_age1824_fear_carousel"},
  // lovedone_age1824_fear_carousel: {func: 'storiesCarousel', param: ["loved-one", "18-24", "fear"]},
  // lovedone_age1824_suffering: {next: "lovedone_age1824_suffering_carousel"},
  // lovedone_age1824_suffering_carousel: {func: 'storiesCarousel', param: ["loved-one", "18-24", "suffering"]},
  // lovedone_age1824_aspirations: {next: "lovedone_age1824_aspirations_carousel"},
  // lovedone_age1824_aspirations_carousel: {func: 'storiesCarousel', param: ["loved-one", "18-24", "aspirations"]},
  // lovedone_age1824_justbecause: {next: "lovedone_age1824_justbecause_carousel"},
  // lovedone_age1824_justbecause_carousel: {func: 'storiesCarousel', param: ["loved-one", "18-24", "justbecause"]},

  // lovedone_age2554: {next: 'lovedone_age2554_story'},
  // lovedone_age2554_story: {
  //   HOPE: {next: 'lovedone_age2554_hope'},
  //   FEAR: {next: 'lovedone_age2554_fear'},
  //   SUFFERING: {next: 'lovedone_age2554_suffering'},
  //   ASPIRATIONS: {next: 'lovedone_age2554_aspirations'},
  //   JUSTBECAUSE: {next: 'lovedone_age2554_justbecause'}
  // },
  // lovedone_age2554_story_nft: {
  //   HOPE: {next: 'lovedone_age2554_hope'},
  //   FEAR: {next: 'lovedone_age2554_fear'},
  //   SUFFERING: {next: 'lovedone_age2554_suffering'},
  //   ASPIRATIONS: {next: 'lovedone_age2554_aspirations'},
  //   JUSTBECAUSE: {next: 'lovedone_age2554_justbecause'}
  // },  

  // lovedone_age2554_hope: {next: "lovedone_age2554_hope_carousel"},
  // lovedone_age2554_hope_carousel: {func: 'showStoriesCarousel', param: ["loved-one", "25-54", "hope"]},
  // lovedone_age2554_fear: {next: "lovedone_age2554_fear_carousel"},
  // lovedone_age2554_fear_carousel: {func: 'showStoriesCarousel', param: ["loved-one", "25-54", "fear"]},
  // lovedone_age2554_suffering: {next: "lovedone_age2554_suffering_carousel"},
  // lovedone_age2554_suffering_carousel: {func: 'showStoriesCarousel', param: ["loved-one", "25-54", "suffering"]},
  // lovedone_age2554_aspirations: {next: "lovedone_age2554_aspirations_carousel"},
  // lovedone_age2554_aspirations_carousel: {func: 'showStoriesCarousel', param: ["loved-one", "25-54", "aspirations"]},
  // lovedone_age2554_justbecause: {next: "lovedone_age2554_justbecause_carousel"},
  // lovedone_age2554_justbecause_carousel: {func: 'showStoriesCarousel', param: ["loved-one", "25-54", "justbecause"]},

  // lovedone_age55plus: {next: 'lovedone_age55plus_story'},
  // lovedone_age55plus_story: {
  //   HOPE: {next: 'lovedone_age55plus_hope'},
  //   FEAR: {next: 'lovedone_age55plus_fear'},
  //   SUFFERING: {next: 'lovedone_age55plus_suffering'},
  //   ASPIRATIONS: {next: 'lovedone_age55plus_aspirations'},
  //   JUSTBECAUSE: {next: 'lovedone_age55plus_justbecause'}
  // },
  // lovedone_age55plus_story_nft: {
  //   HOPE: {next: 'lovedone_age55plus_hope'},
  //   FEAR: {next: 'lovedone_age55plus_fear'},
  //   SUFFERING: {next: 'lovedone_age55plus_suffering'},
  //   ASPIRATIONS: {next: 'lovedone_age55plus_aspirations'},
  //   JUSTBECAUSE: {next: 'lovedone_age55plus_justbecause'}
  // },

  // lovedone_age55plus_hope: {next: "lovedone_age55plus_hope_carousel"},
  // lovedone_age55plus_hope_carousel: {func: 'showStoriesCarousel', param: ["loved-one", "55+", "hope"]},
  // lovedone_age55plus_fear: {next: "lovedone_age55plus_fear_carousel"},
  // lovedone_age55plus_fear_carousel: {func: 'showStoriesCarousel', param: ["loved-one", "55+", "fear"]},
  // lovedone_age55plus_suffering: {next: "lovedone_age55plus_suffering_carousel"},
  // lovedone_age55plus_suffering_carousel: {func: 'showStoriesCarousel', param: ["loved-one", "55+", "suffering"]},
  // lovedone_age55plus_aspirations: {next: "lovedone_age55plus_aspirations_carousel"},
  // lovedone_age55plus_aspirations_carousel: {func: 'showStoriesCarousel', param: ["loved-one", "55+", "aspirations"]},
  // lovedone_age55plus_justbecause: {next: "lovedone_age55plus_justbecause_carousel"},
  // lovedone_age55plus_justbecause_carousel: {func: 'showStoriesCarousel', param: ["loved-one", "55+", "justbecause"]},
}