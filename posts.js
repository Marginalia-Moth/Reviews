/* Marginalia — the archive.
   Add a post by copying one of the objects below and editing it.
   Newest first is conventional but not required; each section keeps this order.

   platform : 'blog' | 'bluesky' | 'reddit'
   subreddit: reddit posts only, e.g. 'r/writing'
   excerpt  : the line shown on the card in the feed
   tags     : any strings; the tag filter builds itself from these
   body     : one string per paragraph, shown on the post page
   id       : must be unique across the whole file
*/

window.POSTS = [
  { id: 'b1', platform: 'blog', date: 'Jan 12, 2026', title: 'On Rereading Your Own Drafts at 2 A.M.', excerpt: 'There is a specific hour when your old writing stops looking like yours and starts looking like evidence.', tags: ['writing', 'insomnia'],
    body: [
      'There is a specific hour when your old writing stops looking like yours and starts looking like evidence. Midnight it is merely bad. By two it has motive.',
      "I keep a folder of essays I abandoned at the paragraph where I realized I didn't believe the thesis anymore. Reading it back is less editing than deposition — who wrote this, why did they think this, and were they under the influence of a deadline.",
      'The honest answer is that most of it was fine. It just wasn\u2019t finished, and unfinished things read like confessions if you catch them at the wrong hour.'
    ] },
  { id: 'b2', platform: 'blog', date: 'Feb 3, 2026', title: 'The Personal Website Will Outlive Us All (Again)', excerpt: 'Every few years someone declares the personal website dead, and every few years I am still here, updating mine.', tags: ['internet', 'nostalgia'],
    body: [
      'Every few years someone declares the personal website dead, and every few years I am still here, updating mine, at an hour no platform would schedule a post for.',
      'The pitch for the platforms was always the same: we\u2019ll handle the hosting, the design, the audience. What they didn\u2019t mention is that they\u2019d also handle the disappearing, on a schedule of their choosing and none of yours.',
      'A personal site is slower, uglier, and entirely mine, which is the whole point. Nobody is going to sunset it out from under me for a redesign nobody asked for.'
    ] },
  { id: 'b3', platform: 'blog', date: 'Mar 21, 2026', title: 'A Short Defense of Overthinking Your Captions', excerpt: 'Somewhere it became fashionable to pretend you dashed off the caption in ten seconds. I do not believe you.', tags: ['internet', 'humor'],
    body: [
      'Somewhere it became fashionable to pretend you dashed off the caption in ten seconds, half-asleep, barely trying. I do not believe you, and more importantly I do not believe myself when I try it.',
      'I have deleted and retyped a four-word caption enough times that the phone briefly suggested I file a restraining order against my own thumb.',
      'This is not a flaw. Caring about eleven words nobody will remember is, I have decided, a small and private form of dignity.'
    ] },
  { id: 'b4', platform: 'blog', date: 'May 9, 2026', title: 'What I Learned Arguing With a Chatbot About the Oxford Comma', excerpt: 'It conceded the grammar and held the line on the ideology. I respect that, infuriatingly.', tags: ['writing', 'technology'],
    body: [
      'It conceded the grammar and held the line on the ideology. I respect that, infuriatingly, in a way I do not respect it when humans do the same thing.',
      'The argument, briefly: I wanted the comma before every "and" in a list; it wanted it only where ambiguity demanded it. We were both right, which is the worst way to lose an argument.',
      'I have since put the comma back in everywhere, out of spite, and told no one which side actually won.'
    ] },
  { id: 's1', platform: 'bluesky', date: 'Jan 30, 2026', title: 'Unpopular opinion: the group chat peaked in 2019', excerpt: 'Unpopular opinion: the group chat peaked in 2019 and we\u2019ve all been performing CPR on it since.', tags: ['humor', 'internet'],
    body: ['Unpopular opinion: the group chat peaked in 2019 and we\u2019ve all been performing CPR on it since.'] },
  { id: 's2', platform: 'bluesky', date: 'Mar 6, 2026', title: 'Nobody tell my landlord I\u2019ve started reading the lease as poetry', excerpt: 'Clause 4(b) is doing things.', tags: ['humor', 'work'],
    body: ['Nobody tell my landlord I\u2019ve started reading the lease as poetry. Clause 4(b) is doing things.'] },
  { id: 's3', platform: 'bluesky', date: 'Jun 18, 2026', title: 'Day 40 of trying to make \u2018summer Friday\u2019 a verb', excerpt: 'Committee of one. Morale: mixed.', tags: ['work', 'humor'],
    body: ['Day 40 of trying to make \u2018summer Friday\u2019 a verb. Committee of one. Morale: mixed.'] },
  { id: 'r1', platform: 'reddit', subreddit: 'r/writing', date: 'Feb 14, 2026', title: 'How do you stop editing a sentence you\u2019ve already ruined?', excerpt: 'Top comment, 400-some upvotes, on a thread about the sunk cost of a single overworked sentence.', tags: ['writing', 'advice'],
    body: [
      'Top comment on a thread asking how to stop editing a sentence you\u2019ve already ruined.',
      'You don\u2019t save the sentence. You save the idea and shoot the sentence. It served its purpose, which was proving to you that the first ten ways of saying this were wrong.',
      'The tell that you\u2019ve ruined it: you\u2019re moving clauses around instead of asking whether the sentence needs to exist. Delete it, write the idea in one plain line, then decide if it deserves more.'
    ] },
  { id: 'r2', platform: 'reddit', subreddit: 'r/mildlyinteresting', date: 'Apr 2, 2026', title: 'Found my old Xanga password taped inside a childhood diary', excerpt: 'It still works. I have not logged in. I am afraid of who I was going to be.', tags: ['nostalgia', 'internet'],
    body: [
      'Found my old Xanga password taped inside a childhood diary while cleaning out a closet.',
      'It still works, apparently, or worked as of the last time anyone checked in the comments. I have not logged in. There is a fifteen-year-old on the other side of that password and I am not sure either of us is ready to meet.',
      'Several commenters demanded screenshots. I have declined, on the grounds that some archives are meant to stay theoretical.'
    ] },
  { id: 'r3', platform: 'reddit', subreddit: 'r/CasualConversation', date: 'Jul 1, 2026', title: 'The reply that got 400 upvotes about ghosting your group project partner', excerpt: 'You don\u2019t owe the group project the same courtesy you owe a person. You owe the person an email.', tags: ['relationships', 'humor'],
    body: [
      'A reply to someone asking whether it\u2019s rude to go quiet on a group project partner who stopped pulling their weight.',
      'You don\u2019t owe the group project the same courtesy you owe a person. You owe the person an email: here\u2019s where it stands, here\u2019s what I\u2019m doing, here\u2019s what I need from you by Thursday.',
      'Ghosting the project is fine. Ghosting the human is how you end up as the villain in someone else\u2019s Reddit post.'
    ] }
];
