// Fake post templates for endless content with valid HTTPS image URLs
const fakePosts = [
  {
    username: 'GreenGuru',
    avatar: 'G',
    datetime: 'Sep 1, 2025, 10:00 AM',
    likes: 45,
    comments: ['Great initiative!', 'Keep it up!'],
    content: `Excited to share our tree-planting campaign today! 🌳🌿  
Every sapling planted helps fight climate change and creates a healthier environment for all.  
Let’s come together, get our hands dirty, and grow a sustainable future for our community.  
Who’s joining us next time?`,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    username: 'EcoWarrior',
    avatar: 'E',
    datetime: 'Sep 2, 2025, 02:30 PM',
    likes: 60,
    comments: ['Awesome tips!', 'I started composting recently.'],
    content: `Recycling isn’t just a buzzword—it’s a necessity! ♻️  
Sorting your waste into recyclables and compostables significantly cuts landfill contributions and pollution.  
Start small: separate plastics, paper, and organics at home and school.  
Your actions matter more than you think!`,
    img: 'https://images.unsplash.com/photo-1520154052133-1e9170f4e91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    username: 'NatureLover',
    avatar: 'N',
    datetime: 'Sep 3, 2025, 08:45 AM',
    likes: 38,
    comments: ['So inspiring!', 'We should organize a hike.'],
    content: `Biodiversity is critical for healthy ecosystems and our survival. 🦋🌼  
Every species, from the tiniest insect to large predators, plays a role in maintaining balance.  
Protect native plants, reduce pesticide use, and support local wildlife habitats.  
Together, we can preserve the wonders of nature for generations to come.`,
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    username: 'SolarAmbassador',
    avatar: 'S',
    datetime: 'Sep 5, 2025, 11:15 AM',
    likes: 52,
    comments: ['Solar power is the future!', 'Great info.'],
    content: `Switching to solar energy reduces carbon footprints drastically. ☀️🔋  
Did you know that even small solar panels on rooftops can power lights and fans effectively?  
Encourage your school to explore renewable energy options and save on electricity while protecting the planet!`,
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    username: 'WaterSaver',
    avatar: 'W',
    datetime: 'Sep 6, 2025, 04:00 PM',
    likes: 40,
    comments: ['Every drop counts!', 'Thanks for reminding me.'],
    content: `Fresh water is a precious resource, but many often waste it unintentionally. 💧  
Simple habits like turning off taps while brushing, reuse bath water for plants, and fixing leaks help conserve this vital resource.  
Let’s be mindful and keep our waterways clean and abundant.`,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    username: 'CleanAirChampion',
    avatar: 'C',
    datetime: 'Sep 7, 2025, 09:30 AM',
    likes: 55,
    comments: ['Planting more trees!', 'Air quality is so important.'],
    content: `Urban areas are plagued by air pollution, but nature provides a solution—trees! 🌲🌿  
Trees absorb carbon dioxide and release oxygen, purifying the air we breathe.  
Join local afforestation drives or plant a tree in your backyard today!  
Together, we can breathe cleaner and live healthier.`,
    img: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    username: 'UrbanGardener',
    avatar: 'U',
    datetime: 'Sep 8, 2025, 03:20 PM',
    likes: 48,
    comments: ['Love urban gardens!', 'Started my own balcony farm.'],
    content: `Urban gardening transforms small spaces into lush green spots that improve air quality and provide fresh produce. 🌿🍅  
Small efforts like growing herbs on windowsills or community garden projects can have big positive impacts.  
Encourage your friends and school to take part in greening our cities!`,
    img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    username: 'PlasticFreeAdvocate',
    avatar: 'P',
    datetime: 'Sep 9, 2025, 10:10 AM',
    likes: 67,
    comments: ['Refusing single-use plastics!', 'Such an important message.'],
    content: `Plastic pollution chokes oceans and harms wildlife. 🌊🐢  
Refuse single-use plastics like bags, straws, and bottles. Opt for reusable, eco-friendly alternatives instead.  
Every plastic item we avoid is a step toward a cleaner planet.`,
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    username: 'ClimateEducator',
    avatar: 'C',
    datetime: 'Sep 10, 2025, 07:45 PM',
    likes: 75,
    comments: ['Education is key!', 'Let’s spread awareness.'],
    content: `Understanding climate change helps us act more effectively. 🌍📚  
Participate in workshops, read scientific articles, and share knowledge with peers.  
Informed communities are empowered communities ready to make a difference.`,
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    username: 'CleanEnergyFan',
    avatar: 'F',
    datetime: 'Sep 11, 2025, 12:00 PM',
    likes: 82,
    comments: ['Solar panels are awesome!', 'Renewables for the win!'],
    content: `Renewable energy sources like wind, solar, and hydro are the future of clean power. ⚡🌞🌊  
Supporting and advocating for green energy helps reduce dependency on fossil fuels and cuts down emissions.  
Let’s power our lives sustainably!`,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    username: 'ZeroWasteHero',
    avatar: 'Z',
    datetime: 'Sep 12, 2025, 08:30 AM',
    likes: 59,
    comments: ['Love zero-waste lifestyle!', 'Great tips to reduce waste!'],
    content: `Zero waste means making mindful choices to minimize our trash footprint. 🚯🌱  
Reuse, recycle, compost, and refuse unnecessary items.  
Small daily habits lead to huge positive effects on the environment and community.`,
    img: 'https://images.unsplash.com/photo-1516569422045-4dd2148b96d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  }
];

// Load posts from localStorage or empty array
let posts = JSON.parse(localStorage.getItem('posts')) || [];

// If no saved posts, preload some fake posts initially
if (posts.length === 0) {
  posts = [...fakePosts];
}

let fakePostIndex = 0;

function handleLike(index) {
  posts[index].likes++;
  updateStorageAndRender();
}

function handleComment(index) {
  const input = document.getElementById(`comment-input-${index}`);
  const text = input.value.trim();
  if (text) {
    posts[index].comments.push(text);
    input.value = '';
    updateStorageAndRender();
  }
}

function handleShare(index) {
  alert('Share functionality coming soon!');
}

function updateStorageAndRender() {
  localStorage.setItem('posts', JSON.stringify(posts));
  renderPosts();
}

function renderPosts() {
  const feed = document.getElementById('feed');
  feed.innerHTML = '';

  posts.forEach((post, i) => {
    feed.innerHTML += `
      <div class="post">
        <div class="post-header">
          <div class="avatar">${post.avatar}</div>
          <div>
            <div><strong>${post.username}</strong></div>
            <div class="post-meta">${post.datetime}</div>
          </div>
        </div>
        <div class="post-content">${post.content}</div>
        ${post.img ? `<img src="${post.img}" alt="Post Image" style="max-width: 100%; border-radius: 8px; margin: 10px 0;">` : ''}
        <div class="post-actions">
          <button onclick="handleLike(${i})">&#10084; Like</button>
          <button onclick="handleShare(${i})">&#128257; Share</button>
        </div>
        <div class="likes">Likes: ${post.likes}</div>
        <div class="comments">Comments: ${post.comments.length}</div>
        <div class="comment-section">
          <input type="text" id="comment-input-${i}" placeholder="Add a comment..." />
          <button onclick="handleComment(${i})">Comment</button>
          <div class="comment-list">
            ${post.comments.map(c => `<div class="comment">${c}</div>`).join('')}
          </div>
        </div>
      </div>
    `;
  });
}

// Function to load more fake posts dynamically as user scrolls
function loadMoreFakePosts(count = 3) {
  for (let i = 0; i < count; i++) {
    const template = fakePosts[fakePostIndex % fakePosts.length];
    const newPost = {
      ...template,
      datetime: new Date().toLocaleString(),
      likes: Math.floor(Math.random() * 100),
      comments: [...template.comments],
    };
    posts.push(newPost);
    fakePostIndex++;
  }
  updateStorageAndRender();
}

// Infinite scroll event listener to load more posts near page bottom
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    loadMoreFakePosts();
  }
});

// Initial render on page load
renderPosts();
