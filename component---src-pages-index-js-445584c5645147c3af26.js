(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(145),o=a(147),s=a(150),l=a(162),h=function(){return n.a.createElement(r.b,{query:"3864476954",render:function(e){return console.log(e.movieDb.data.results),e.movieDb.data.results.map(function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("h2",null,e.original_title),n.a.createElement("p",null,e.overview),n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:"poster_image"}))})},data:l})};t.default=function(){return n.a.createElement(o.a,null,n.a.createElement(s.a,{title:"Home",keywords:["gatsby","application","react"]}),n.a.createElement("div",null,n.a.createElement(h,null)),n.a.createElement(r.a,{to:"/page-2/"},"Go to page 2"))}},145:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(32),l=a.n(s);a.d(t,"a",function(){return l.a});a(146);var h=n.a.createContext({}),d=function(e){return n.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){var i;e.exports=(i=a(149))&&i.default||i},147:function(e,t,a){"use strict";var i=a(148),n=a(0),r=a.n(n),o=a(4),s=a.n(o),l=a(145),h=(a(152),function(e){var t=e.children;return r.a.createElement(l.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{backgroundImage:"url('https://image.tmdb.org/t/p/original/xRWht48C2V8XNfzvPehyClOvDni.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",opacity:"0.4",position:"fixed",width:"100%",height:"100%"}}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"200px",paddingTop:0,position:"relative",zIndex:"2"}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:i})});h.propTypes={children:s.a.node.isRequired},t.a=h},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},149:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(54),l=a(2),h=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};h.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=h},150:function(e,t,a){"use strict";var i=a(151),n=a(0),r=a.n(n),o=a(4),s=a.n(o),l=a(153),h=a.n(l);function d(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title,l=i.data.site,d=t||l.siteMetadata.description;return r.a.createElement(h.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},162:function(e){e.exports={data:{movieDb:{data:{results:[{original_title:"Alita: Battle Angel",overview:"When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",poster_path:"/xRWht48C2V8XNfzvPehyClOvDni.jpg"},{original_title:"Green Book",overview:"Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.",poster_path:"/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg"},{original_title:"Spider-Man: Into the Spider-Verse",overview:'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',poster_path:"/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg"},{original_title:"How to Train Your Dragon: The Hidden World",overview:"As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",poster_path:"/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg"},{original_title:"Glass",overview:"In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",poster_path:"/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg"},{original_title:"Fantastic Beasts: The Crimes of Grindelwald",overview:"Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",poster_path:"/kQKcbJ9uYkTQql2R8L4jTUz7l90.jpg"},{original_title:"Bohemian Rhapsody",overview:"Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",poster_path:"/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg"},{original_title:"Isn't It Romantic",overview:"For a long time, Natalie, an Australian architect living in New York City, had always believed that what she had seen in rom-coms is all fantasy. But after thwarting a mugger at a subway station only to be knocked out while fleeing, Natalie wakes up and discovers that her life has suddenly become her worst nightmare—a romantic comedy—and she is the leading lady.",poster_path:"/5xNBYXuv8wqiLVDhsfqCOr75DL7.jpg"},{original_title:"Creed II",overview:"Between personal obligations and training for his next big fight against an opponent with ties to his family's past, Adonis Creed is up against the challenge of his life.",poster_path:"/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg"},{original_title:"Mortal Engines",overview:"Many thousands of years in the future, Earth’s cities roam the globe on huge wheels, devouring each other in a struggle for ever diminishing resources. On one of these massive traction cities, the old London, Tom Natsworthy has an unexpected encounter with a mysterious young woman from the wastelands who will change the course of his life forever.",poster_path:"/gLhYg9NIvIPKVRTtvzCWnp1qJWG.jpg"},{original_title:"A Star Is Born",overview:"Seasoned musician Jackson Maine discovers — and falls in love with — struggling artist Ally. She has just about given up on her dream to make it big as a singer — until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",poster_path:"/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg"},{original_title:"Ralph Breaks the Internet",overview:'Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope\'s video game, "Sugar Rush." In way over their heads, Ralph and Vanellope rely on the citizens of the internet -- the netizens -- to help navigate their way, including an entrepreneur named Yesss, who is the head algorithm and the heart and soul of trend-making site BuzzzTube.',poster_path:"/ybhsGCKHpzqJDRsfnGmHNUHHrqB.jpg"},{original_title:"劇場版「Fate/stay night [Heaven's Feel] ⅠⅠ. lost butterfly」",overview:'Theatrical-release adaptation of the visual novel "Fate/stay night", following the third and final route. (Part 2 of a trilogy.)',poster_path:"/4tS0iyKQBDFqVpVcH21MSJwXZdq.jpg"},{original_title:"Instant Family",overview:"When Pete and Ellie decide to start a family, they stumble into the world of foster care adoption. They hope to take in one small child but when they meet three siblings, including a rebellious 15 year old girl, they find themselves speeding from zero to three kids overnight.",poster_path:"/xYV1mODz99w7AjKDSQ7h2mzZhVe.jpg"},{original_title:"Aquaman",overview:"Once home to the most advanced civilization on Earth, the city of Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people -- and then the surface world. Standing in his way is Aquaman, Orm's half-human, half-Atlantean brother and true heir to the throne. With help from royal counselor Vulko, Aquaman must retrieve the legendary Trident of Atlan and embrace his destiny as protector of the deep.",poster_path:"/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg"},{original_title:"The Favourite",overview:"England, early 18th century. The close relationship between Queen Anne and Sarah Churchill is threatened by the arrival of Sarah's cousin, Abigail Hill, resulting in a bitter rivalry between the two cousins to be the Queen's favourite.",poster_path:"/cwBq0onfmeilU5xgqNNjJAMPfpw.jpg"},{original_title:"Cold Pursuit",overview:"Nels Coxman's quiet life comes crashing down when his beloved son dies under mysterious circumstances. His search for the truth soon becomes a quest for revenge as he seeks coldblooded justice against a drug lord and his inner circle.",poster_path:"/hXgmWPd1SuujRZ4QnKLzrj79PAw.jpg"},{original_title:"Serenity",overview:"Baker Dill is a fishing boat captain leading tours off a tranquil, tropical enclave called Plymouth Island. His quiet life is shattered, however, when his ex-wife Karen tracks him down with a desperate plea for help.",poster_path:"/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg"},{original_title:"Avengers: Infinity War",overview:"As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",poster_path:"/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"},{original_title:"Happy Death Day 2U",overview:"Collegian Tree Gelbman wakes up in horror to learn that she's stuck in a parallel universe. Her boyfriend Carter is now with someone else, and her friends and fellow students seem to be completely different versions of themselves. When Tree discovers that Carter's roommate has been altering time, she finds herself once again the target of a masked killer. When the psychopath starts to go after her inner circle, Tree soon realizes that she must die over and over again to save everyone.",poster_path:"/whtt9F8PFqvEgc4fDSHZPkitFk4.jpg"}]}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-445584c5645147c3af26.js.map