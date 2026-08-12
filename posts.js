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
  { id: 'b1', platform: 'blog', date: 'Jan 12, 2026', title: 'Habits you shouldnt attempt', excerpt: 'Otherwise known as no, you shouldnt offer to review 17 books at one time...', tags: ['writing', 'insomnia'],
    body: [
      'There is a specific hour when your old writing stops looking like yours and starts looking like evidence. Midnight it is merely bad. By two it has motive.',
      "You never want to be under the influence of a deadline."
    ] },
 
  { id: 's1', platform: 'bluesky', date: 'Jan 30, 2026', title: 'Unpopular opinion: the group chat peaked in 2019', excerpt: 'Unpopular opinion: the group chat peaked in 2019 and we\u2019ve all been performing CPR on it since.', tags: ['humor', 'internet'],
    body: ['Unpopular opinion: the group chat peaked in 2019 and we\u2019ve all been performing CPR on it since.'] },
 
  { id: 'r1', platform: 'reddit', subreddit: 'r/mildlyinteresting', date: 'Apr 2, 2026', title: 'Found my old Xanga password taped inside a childhood diary', excerpt: 'It still works. I have not logged in. I am afraid of who I was going to be.', tags: ['nostalgia', 'internet'],
    body: [
      'Found my old Xanga password taped inside a childhood diary while cleaning out a closet.',
      'It still works, apparently, or worked as of the last time anyone checked in the comments. I have not logged in. There is a fifteen-year-old on the other side of that password and I am not sure either of us is ready to meet.',
      'Several commenters demanded screenshots. I have declined, on the grounds that some archives are meant to stay theoretical.'
    ] },
 
];
