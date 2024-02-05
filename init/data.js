const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
      geometry:"United States"
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
      geometry: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
      geometry: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
      geometry: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 800,
      location: "Portland",
      country: "United States",
      geometry: "United States",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
      geometry: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
      geometry: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
      geometry: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
      geometry: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
      geometry: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
      
      geometry: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
      
      geometry: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
      
      geometry: "United Kingdom",
     
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2200,
      location: "Boston",
      country: "United States",
      
      geometry: "United Kingdom",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
      
      geometry: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Banff",
      country: "Canada",
      
      geometry: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Miami",
      country: "United States",
      
      geometry: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Phuket",
      country: "Thailand",
     
      geometry: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
      
      geometry: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
      geometry: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Montana",
      country: "United States",
      
      geometry: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
      
      geometry: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
      
      geometry: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Charleston",
      country: "United States",
      
      geometry: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
      
      geometry: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
      
      geometry: "United States",
    },
    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
     
      geometry: "Maldives",
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Aspen",
      country: "United States",
      
      geometry: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
     
      geometry: "Costa Rica",
    },
    {
      "title": "Private Oceanfront Villa in Bali",
      "description": "Indulge in tranquility at our private oceanfront villa in Bali. Enjoy breathtaking views and a serene atmosphere.",
      "image": {
        "filename": "bali_villa",
        "url": "https://plus.unsplash.com/premium_photo-1677626376739-e46c7e5994cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fHww"
      },
      "price": 2200,
      "location": "Bali",
      "country": "Indonesia",
      
      geometry: "Indonesia",
    },  
    {
      "title": "Luxury Villa in the Maldives",
      "description": "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
      },
      "price": 6000,
      "location": "Maldives",
      "country": "Maldives",
     
      geometry: "Maldives",
    },
    {
      "title": "Ocean Paradise Villa",
      "description": "Escape to this exclusive overwater villa with breathtaking ocean views.",
      "image": {
        "filename": "ocean_paradise",
        "url": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww"
      },
      "price": 7500,
      "location": "Maldives",
      "country": "Maldives",
      
      geometry:"Maldives",
    },
    {
      "title": "Sunset Bliss Retreat",
      "description": "Experience the ultimate luxury with mesmerizing sunset views from your private villa.",
      "image": {
        "filename": "sunset_bliss",
        "url": "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fHww"
      },
      "price": 8500,
      "location": "Maldives",
      "country": "Maldives",
      
      geometry: "Maldives",
    },
    {
      "title": "Royal Oasis Haven",
      "description": "Indulge in regal luxury and opulence at this exclusive overwater retreat.",
      "image": {
        "filename": "royal_oasis",
        "url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww"
      },
      "price": 10000,
      "location": "Maldives",
      "country": "Maldives",
      
      geometry: "Maldives",
    },
    {
      "title": "Royal Oasis Haven",
      "description": "Indulge in regal luxury and opulence at this exclusive overwater retreat.",
      "image": {
        "filename": "royal_oasis",
        "url": "https://plus.unsplash.com/premium_photo-1677626376813-1ea652d15288?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fHww"
      },
      "price": 10000,
      "location": "Maldives",
      "country": "Maldives",
    
      geometry: "Maldives",
    },
    {
      "title": "Azure Serenity Villa",
      "description": "Relax in the serenity of azure waters surrounding this exquisite overwater villa.",
      "image": {
        "filename": "azure_serenity",
        "url": "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 9000,
      "location": "Maldives",
      "country": "Maldives",
    
      geometry: "Maldives",
    },
    {
      "title": "Tropical Elegance Retreat",
      "description": "Embrace tropical elegance in this secluded overwater villa with lush surroundings.",
      "image": {
        "filename": "tropical_elegance",
        "url": "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 8000,
      "location": "Maldives",
      "country": "Maldives",
     
      geometry: "Maldives",
    },
    {
      "title": "Ocean Paradise Villa",
      "description": "Escape to this exclusive overwater villa with breathtaking ocean views.",
      "image": {
        "filename": "ocean_paradise",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww"
      },
      "price": 7500,
      "location": "Maldives",
      "country": "Maldives",
     
      geometry: "Maldives",
    },
    {
      "title": "Sunset Bliss Retreat",
      "description": "Experience the ultimate luxury with mesmerizing sunset views from your private villa.",
      "image": {
        "filename": "sunset_bliss",
        "url": "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 8500,
      "location": "Maldives",
      "country": "Maldives",
      geometry: "Maldives",
    },
    {
      "title": "Royal Oasis Haven",
      "description": "Indulge in regal luxury and opulence at this exclusive overwater retreat.",
      "image": {
        "filename": "royal_oasis",
        "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 10000,
      "location": "Maldives",
      "country": "Maldives",
     
      geometry: "Maldives",
    },
    {
      "title": "Azure Serenity Villa",
      "description": "Relax in the serenity of azure waters surrounding this exquisite overwater villa.",
      "image": {
        "filename": "azure_serenity",
        "url": "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 9000,
      "location": "Maldives",
      "country": "Maldives",
     
      geometry: "Maldives",
    },
    {
      "title": "Tropical Elegance Retreat",
      "description": "Embrace tropical elegance in this secluded overwater villa with lush surroundings.",
      "image": {
        "filename": "tropical_elegance",
        "url": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 8000,
      "location": "Maldives",
      "country": "Maldives",
    
      geometry: "Maldives",
    },
    {
      "title": "Crystal Clear Oasis",
      "description": "Discover the beauty of crystal-clear waters in this overwater villa surrounded by marine life.",
      "image": {
        "filename": "crystal_clear_oasis",
        "url": "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.jpg?s=612x612&w=0&k=20&c=Mgv-X8WDN5RmQUCapf1HKxGFIK-6PW56Euflghg3zhk="
      },
      "price": 9200,
      "location": "Maldives",
      "country": "Maldives",
     
      geometry: "Maldives",
    },
    {
      "title": "Golden Sands Retreat",
      "description": "Step into luxury with golden sandy beaches and a private overwater villa experience.",
      "image": {
        "filename": "golden_sands",
        "url": "https://media.istockphoto.com/id/162137765/photo/summer-swimming-pool.jpg?s=612x612&w=0&k=20&c=Wv3DeS8S-yygZpJ6eE90iu7861DRVd177MlGTZVWd1I="
      },
      "price": 7800,
      "location": "Maldives",
      "country": "Maldives",
    
      geometry: "Maldives",
    },
    {
      "title": "Emerald Isle Sanctuary",
      "description": "Escape to an emerald paradise with lush greenery surrounding your overwater villa.",
      "image": {
        "filename": "emerald_isle",
        "url": "https://media.istockphoto.com/id/490555943/photo/indian-hotel-resort-evening-scene.jpg?s=612x612&w=0&k=20&c=Kdxdri8dOvSchwNXzV1uYQcXGAI8CD0BKSi7gkxPzKI="
      },
      "price": 8300,
      "location": "Maldives",
      "country": "Maldives",
    
      geometry: "Maldives",
    },
    {
      "title": "Pearl Perfection Villa",
      "description": "Experience perfection in this overwater villa with views of pearl-like sandy shores.",
      "image": {
        "filename": "pearl_perfection",
        "url": "https://media.istockphoto.com/id/188014849/photo/island-villa.jpg?s=612x612&w=0&k=20&c=9sLWQKHnFW_O4KjXoFwPu9ymL0VmSYr12l9ntKgYb84="
      },
      "price": 8800,
      "location": "Maldives",
      "country": "Maldives",
  
      geometry: "Maldives",
    },
    {
      "title": "Sapphire Serenade Haven",
      "description": "Serenade your senses in this overwater villa surrounded by the deep blue hues of the Indian Ocean.",
      "image": {
        "filename": "sapphire_serenade",
        "url": "https://media.istockphoto.com/id/1322194588/photo/local-houses-in-kasol-village-india.jpg?s=612x612&w=0&k=20&c=C9r0oZRwD2neIxPmrPT0YleXiMKXkthOD4jPgV8BuRk="
      },
      "price": 9500,
      "location": "Maldives",
      "country": "Maldives",
      
      geometry: "Maldives",
    },
    {
      "title": "Velvet Horizon Retreat",
      "description": "Experience the velvety touch of luxury with a horizon that stretches to infinity.",
      "image": {
        "filename": "velvet_horizon",
        "url": "https://media.istockphoto.com/id/1440725714/photo/heritage-king-place-with-dramatic-bright-blue-sky-from-flat-angle.jpg?s=612x612&w=0&k=20&c=k7tllj77w3KI6KoDob2LGdl-04_CiqgFQukrtnm6T0g="
      },
      "price": 8900,
      "location": "Maldives",
      "country": "Maldives",
    
      geometry: "Maldives",
    },
    {
      "title": "Island Majesty Villa",
      "description": "Bask in the majesty of island life with a private villa offering unparalleled luxury.",
      "image": {
        "filename": "island_majesty",
        "url": "https://media.istockphoto.com/id/1333257950/photo/digitally-rendered-image-of-a-five-star-hotel-interior.jpg?s=612x612&w=0&k=20&c=cAMaQYc-dDz8xveLeM_-xsGtn41-2BJKRA6GrDuy-HE="
      },
      "price": 9700,
      "location": "Maldives",
      "country": "Maldives",
    
      geometry: "Maldives",
    },
    {
      "title": "Coral Cove Sanctuary",
      "description": "Immerse yourself in the vibrant colors of coral reefs surrounding this overwater sanctuary.",
      "image": {
        "filename": "coral_cove",
        "url": "https://media.istockphoto.com/id/106393587/photo/luxury-hotel.jpg?s=612x612&w=0&k=20&c=vbt66vTRaL4Dn-ZDHo_28jAg6rFon8Ezv5Ad9CtHppE="
      },
      "price": 8100,
      "location": "Maldives",
      "country": "Maldives",
      
      geometry: "Maldives",
    },
    {
      "title": "Diamond Lagoon Retreat",
      "description": "Escape to a lagoon-side retreat with diamond-clear waters and unparalleled luxury.",
      "image": {
        "filename": "diamond_lagoon",
        "url": "https://media.istockphoto.com/id/139959582/photo/entrance-lobby-of-a-luxurious-hotel.jpg?s=612x612&w=0&k=20&c=w28ylacdyzJljUzFRTla0kmbCjRnJHtePjtpHgFCj_U="
      },
      "price": 9800,
      "location": "Maldives",
      "country": "Maldives",
      
      geometry: "Maldives",
    },
    {
      "title": "Platinum Sands Villa",
      "description": "Bask in the platinum sands surrounding your private overwater villa in the Maldives.",
      "image": {
        "filename": "platinum_sands",
        "url": "https://media.istockphoto.com/id/1302442919/photo/luxury-beach-villa-at-night.jpg?s=612x612&w=0&k=20&c=oP0fE8SOcrejuCnbBmFAPB8pH47gbCM6m_dvtLihisI="
      },
      "price": 8700,
      "location": "Maldives",
      "country": "Maldives",
      
      geometry: "Maldives",
    },
    {
      "title": "Mystic Moonlight Haven",
      "description": "Experience mystic moonlit nights in this overwater haven with unrivaled elegance.",
      "image": {
        "filename": "mystic_moonlight",
        "url": "https://media.istockphoto.com/id/845996182/photo/ghats-temples-and-hotels-at-haridwar.jpg?s=612x612&w=0&k=20&c=ZAOuZVdknqdI7XQ83O1LZX0DtHB1GnoH4SjCNdShA4A="
      },
      "price": 9300,
      "location": "Maldives",
      "country": "Maldives",
      
      geometry: "Maldives",
    },
    {
      "title": "Rainforest Mirage Villa",
      "description": "Immerse yourself in a mirage of luxury amidst the lush rainforests of the Maldives.",
      "image": {
        "filename": "rainforest_mirage",
        "url": "https://media.istockphoto.com/id/520136175/photo/hotel-bedroom-in-india.jpg?s=612x612&w=0&k=20&c=7TsiIPEPFZIlCGeJyboyoIcSBxxvmLgjH9FWSK655cA="
      },
      "price": 9100,
      "location": "Maldives",
      "country": "Maldives",
      
      geometry: "Maldives",
    },
    {
      "title": "Opal Oasis Retreat",
      "description": "Discover an oasis of opulence in this overwater villa with opal-like shimmering waters.",
      "image": {
        "filename": "opal_oasis",
        "url": "https://media.istockphoto.com/id/494125838/photo/lake-pichola-and-city-palace-in-india.jpg?s=612x612&w=0&k=20&c=btHxQ4qGWx8IfDO1Jayc0r15p_cQ1SrAEcwON0uQcaM="
      },
      "price": 9600,
      "location": "Maldives",
      "country": "Maldives",
      
      geometry: "Maldives",
    },
    {
      "title": "Silken Shores Sanctuary",
      "description": "Relish the silken touch of luxury with shores that beckon tranquility and sophistication.",
      "image": {
        "filename": "silken_shores",
        "url": "https://images.unsplash.com/photo-1579625498711-402ac5318f21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9yZXN0JTIwYXJlYXxlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 9400,
      "location": "Maldives",
      "country": "Maldives",
      
      geometry: "Maldives",
    },
    {
      "title": "Crimson Cove Villa",
      "description": "Immerse yourself in the vibrant crimson hues of this overwater villa surrounded by nature.",
      "image": {
        "filename": "crimson_cove",
        "url": "https://images.unsplash.com/photo-1603657289433-e4983d2114b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvcmVzdCUyMGFyZWF8ZW58MHx8MHx8fDA%3D"
      },
      "price": 8900,
      "location": "Maldives",
      "country": "Maldives",
     
      geometry: "Maldives",
    },
    {
      "title": "Turquoise Tranquility Haven",
      "description": "Indulge in the tranquil shades of turquoise surrounding this exclusive overwater haven.",
      "image": {
        "filename": "turquoise_tranquility",
        "url": "https://images.unsplash.com/photo-1634106646028-c6dc278997eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRvcmVzdCUyMGFyZWF8ZW58MHx8MHx8fDA%3D"
      },
      "price": 9000,
      "location": "Maldives",
    
      "country": "Maldives",
      geometry: "Maldives",
    },
    {
      "title": "Enchanted Eden Villa",
      "description": "Discover an enchanted Eden in this overwater villa with a perfect blend of luxury and nature.",
      "image": {
        "filename": "enchanted_eden",
        "url": "https://media.istockphoto.com/id/610261506/photo/new-apartment-building-modern-residential-development.jpg?s=612x612&w=0&k=20&c=ZSu5Q6FdLMQqwolqrTKeNRznWYe9GdeycTxS9pi6yBo="
      },
      "price": 9700,
      "location": "Maldives",
      "country": "Maldives",
     
      geometry: "Maldives",
    },     
    {
      "title": "Cozy Beachfront Cottage",
      "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
      },
      "price": 1500,
      "location": "Malibu",
      "country": "United States",
      "geometry": "United States"
    },
     {
       "title": "Seaside Retreat",
       "description": "Discover serenity at this beautiful seaside retreat. Breathtaking views and a tranquil atmosphere await you.",
       "image": {
         "filename": "listingimage2",
         "url": "https://a0.muscache.com/im/pictures/b87046c6-c860-4469-87b5-62b5201f2310.jpg?im_w=720"
       },
       "price": 1200,
       "location": "Santa Barbara",
       "country": "United States",
       "geometry": "United States"
     },
    /////////////////////////////////////
    {
      "title": "Cozy Beachfront Cottage",
      "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/7a0e4e5f-ce39-485a-b8d3-cc95c2c81a7e.jpg?im_w=720"
      },
      "price": 1500,
      "location": "Malibu",
      "country": "United States",
      "geometry": "United States"
    },
    {
      "title": "Seaside Retreat",
      "description": "Discover serenity at this beautiful seaside retreat. Breathtaking views and a tranquil atmosphere await you.",
      "image": {
        "filename": "listingimage2",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-39986130/original/8a6cde11-7be0-44a0-a208-e4740cd5efb7.jpeg?im_w=720"
      },
      "price": 1200,
      "location": "Santa Barbara",
      "country": "United States",
      "geometry": "United States"
    }, 
    
      {
        "title": "Sunset Haven",
        "description": "Unwind at this cozy cottage with breathtaking sunset views. A perfect retreat for nature lovers.",
        "image": {
          "filename": "listingimage3",
          "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-859181655926714279/original/37f1f7b4-d9a7-46c1-bdb6-1cd9b244c1b7.jpeg?im_w=720"
        },
        "price": 1800,
        "location": "Monterey",
        "country": "United States",
        "geometry": "United States"
      },
      {
        "title": "Rustic Coastal Cabin",
        "description": "Experience the charm of a rustic coastal cabin surrounded by nature. A perfect escape from the hustle and bustle.",
        "image": {
          "filename": "listingimage4",
          "url": "https://a0.muscache.com/im/pictures/bce4ba91-39b4-4620-8643-bacba0d17a73.jpg?im_w=720"
        },
        "price": 1300,
        "location": "Big Sur",
        "country": "United States",
        "geometry": "United States"
      },
      {
        "title": "Oceanfront Paradise",
        "description": "Indulge in luxury at this oceanfront paradise. Modern amenities and stunning views create an unforgettable experience.",
        "image": {
          "filename": "listingimage5",
          "url": "https://a0.muscache.com/im/pictures/miso/Hosting-39986130/original/8a6cde11-7be0-44a0-a208-e4740cd5efb7.jpeg?im_w=720"
        },
        "price": 2200,
        "location": "Carmel-by-the-Sea",
        "country": "United States",
        "geometry": "United States"
      },
        {
          "title": "Tranquil Beach Bungalow",
          "description": "Relax in this tranquil beach bungalow surrounded by palm trees. Perfect for a peaceful getaway by the sea.",
          "image": {
            "filename": "listingimage6",
            "url": "https://a0.muscache.com/im/pictures/miso/Hosting-749155380306201629/original/8ec9d518-e082-4ba6-a779-0f582288cd94.jpeg?im_w=720"
          },
          "price": 1600,
          "location": "Laguna Beach",
          "country": "United States",
          "geometry": "United States"
        },
        {
          "title": "Cliffside Retreat",
          "description": "Perched on a cliff, this retreat offers panoramic views of the coastline. Experience the beauty of nature in luxury.",
          "image": {
            "filename": "listingimage7",
            "url": "https://a0.muscache.com/im/pictures/6fb02e24-d589-42bd-8b86-41750d91c3d0.jpg?im_w=720"
          },
          "price": 2000,
          "location": "San Diego",
          "country": "United States",
          "geometry": "United States"
        },
        {
          "title": "Coastal Chic Villa",
          "description": "Step into luxury at this coastal chic villa. Stylish decor and oceanfront views create an elegant and serene atmosphere.",
          "image": {
            "filename": "listingimage8",
            "url": "https://a0.muscache.com/im/pictures/2fc4cbb7-15fc-418d-9c22-63378535add6.jpg?im_w=720"
          },
          "price": 1800,
          "location": "Huntington Beach",
          "country": "United States",
          "geometry": "United States"
        },
          {
            "title": "Secluded Coastal Cabin",
            "description": "Escape to this secluded coastal cabin surrounded by nature. Disconnect and rejuvenate in the peaceful ambiance.",
            "image": {
              "filename": "listingimage9",
              "url": "https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/f0f0a291-65a9-442b-9036-45b7e5e25676.jpeg?im_w=720"
            },
            "price": 1400,
            "location": "Oceanside",
            "country": "United States",
            "geometry": "United States"
          },
          {
            "title": "Beachside Zen Cottage",
            "description": "Experience serenity at this beachside Zen cottage. Enjoy the sound of waves and find your inner peace by the sea.",
            "image": {
              "filename": "listingimage10",
              "url": "https://a0.muscache.com/im/pictures/3ceb5077-fa80-444f-9e63-a7b1e55649e0.jpg?im_w=720"
            },
            "price": 1600,
            "location": "Encinitas",
            "country": "United States",
            "geometry": "United States"
          },
          {
            "title": "Desert Oasis 1 in Dubai",
            "description": "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
            "image": {
              "filename": "listingimage1",
              "url": "https://a0.muscache.com/im/pictures/4eac5bf3-0713-41e8-a188-fc8d405b668d.jpg?im_w=720"
            },
            "price": 5000,
            "location": "Dubai",
            "country": "United Arab Emirates",
            "geometry": "United Arab Emirates"
          },
          {
            "title": "Desert Oasis 2 in Dubai",
            "description": "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
            "image": {
              "filename": "listingimage2",
              "url": "https://a0.muscache.com/im/pictures/miso/Hosting-736054620164651418/original/a2f5dce8-a6d3-4f58-826f-8ad91c3712b6.jpeg?im_w=720"
            },
            "price": 5000,
            "location": "Dubai",
            "country": "United Arab Emirates",
            "geometry": "United Arab Emirates"
          },

            {
              "title": "Luxury Desert Retreat",
              "description": "Indulge in opulence at this exclusive desert retreat in Dubai. A haven of tranquility with a private pool and breathtaking views.",
              "image": {
                "filename": "desertretreat1",
                "url": "https://a0.muscache.com/im/pictures/69bbc96c-496a-4a10-b729-dad4849948b4.jpg?im_w=720"
              },
              "price": 5500,
              "location": "Dubai",
              "country": "United Arab Emirates",
              "geometry": "United Arab Emirates"
            },
            {
              "title": "Golden Sands Oasis",
              "description": "Discover the epitome of luxury in this oasis surrounded by golden sands. Immerse yourself in elegance and sophistication.",
              "image": {
                "filename": "goldensands2",
                "url": "https://a0.muscache.com/im/pictures/6a541b09-0c7f-4b7a-a6c6-f0342cd2d4c3.jpg?im_w=720"
              },
              "price": 5200,
              "location": "Dubai",
              "country": "United Arab Emirates",
              "geometry": "United Arab Emirates"
            },
           
          {
    "title": "Sands of Serenity",
    "description": "Immerse yourself in the tranquil sands of serenity at this luxurious desert escape in Dubai. Experience ultimate relaxation with a private pool.",
    "image": {
      "filename": "serenitysands1",
      "url": "https://a0.muscache.com/im/pictures/1578d721-dfde-49d2-bf93-9044d4b6dbd3.jpg?im_w=720"
    },
    "price": 5800,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "geometry": "United Arab Emirates"
  },
  {
    "title": "Royal Mirage Retreat",
    "description": "Step into the lap of luxury at the Royal Mirage Retreat in Dubai. A regal experience awaits you with majestic views and a private oasis.",
    "image": {
      "filename": "royalmirage2",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-871836798046347866/original/5fd6ed11-194b-414d-a327-4d7b310f5817.jpeg?im_w=720"
    },
    "price": 6000,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "geometry": "United Arab Emirates"
  },
  {
    "title": "Golden Dunes Villa",
    "description": "Bask in the splendor of the golden dunes at this luxurious villa in Dubai. A perfect blend of comfort and sophistication.",
    "image": {
      "filename": "goldendunes3",
      "url": "https://a0.muscache.com/im/pictures/bb72a916-d3e8-40b6-9e3f-daa131e7fa72.jpg?im_w=720"
    },
    "price": 5400,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "geometry": "United Arab Emirates"
  },
  {
    "title": "Eternal Sands Retreat",
    "description": "Experience eternity in the midst of the sands at this exclusive retreat. A sanctuary of peace and luxury in the heart of Dubai.",
    "image": {
      "filename": "eternalsands4",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1055484247727776149/original/e6dbe360-4fe2-4890-9e1c-e4b94b275efe.png?im_w=720"
    },
    "price": 5600,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "geometry": "United Arab Emirates"
  },
  {
    "title": "Dunes Delight Villa",
    "description": "Discover delight amidst the dunes at this exquisite villa in Dubai. Immerse yourself in luxury and embrace the beauty of the desert.",
    "image": {
      "filename": "dunesdelight5",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1051102375828090462/original/6b75e910-a69f-4546-9cdb-3e4ca79f8b7f.jpeg?im_w=720"
    },
    "price": 5800,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "geometry": "United Arab Emirates"
  },
  {
    "title": "Sands of Serenity",
    "description": "Indulge yourself in the serene sands at this tranquil desert retreat in Dubai. Experience the epitome of relaxation and luxury.",
    "image": {
      "filename": "sandsserenity6",
      "url": "https://a0.muscache.com/im/pictures/hosting/Hosting-1028737283529247244/original/2979ac3f-f5ef-4691-b0fc-746e8f2ea6c4.jpeg?im_w=720"
    },
    "price": 5400,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "geometry": "United Arab Emirates"
  },
  {
    "title": "Royal Sands Villa",
    "description": "Experience royalty amidst the sands at this majestic villa in Dubai. A perfect blend of grandeur and tranquility awaits you.",
    "image": {
      "filename": "royalsands7",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1030315567402523284/original/feb5531e-a7be-417f-8b60-9775ecbd26e9.jpeg?im_w=720"
    },
    "price": 6000,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "geometry": "United Arab Emirates"
  },
  {
    "title": "Sunset Mirage Retreat",
    "description": "Witness the magic of sunsets at this mirage retreat in Dubai. Immerse yourself in luxury with panoramic views and a private oasis.",
    "image": {
      "filename": "sunsetmirage8",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-925972776264958858/original/5c5cb66a-3123-4753-849b-9b2e51b37426.jpeg?im_w=720"
    },
    "price": 5700,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "geometry": "United Arab Emirates"
  },
  {
    "title": "Dazzling Dunes Villa",
    "description": "Embark on a journey of luxury at the dazzling dunes villa in Dubai. A blend of sophistication and desert charm awaits your arrival.",
    "image": {
      "filename": "dazzlingdunes9",
      "url": "https://a0.muscache.com/im/pictures/eef2dd7d-fbfa-4a8e-a9bf-c70d8a27dde2.jpg?im_w=720"
    },
    "price": 5900,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "geometry": "United Arab Emirates"
  },
  {
    "title": "Ethereal Sands Retreat",
    "description": "Escape to the ethereal sands retreat in Dubai, where luxury meets nature. Immerse yourself in a world of tranquility and grandeur.",
    "image": {
      "filename": "etherealsands10",
      "url": "https://a0.muscache.com/im/pictures/3fe3d4dd-fb10-4f42-83e0-ad88f5b36dae.jpg?im_w=720"
    },
    "price": 6100,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "geometry": "United Arab Emirates"
  },
  {
    "title": "Historic Canal House 1",
    "description": "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    "image": {
      "filename": "listingimage1",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-46186764/original/73144ca9-c22a-482c-9c12-0c250688c500.jpeg?im_w=720"
    },
    "price": 1800,
    "location": "Amsterdam",
    "country": "Netherlands",
    "geometry": "Netherlands"
  },
  {
    "title": "Historic Canal House 2",
    "description": "Experience the charm of Amsterdam in this beautifully preserved canal house. Immerse yourself in the city's rich history.",
    "image": {
      "filename": "listingimage2",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-792464812230465891/original/e701af50-bec8-4008-9147-6fde95ca56d4.jpeg?im_w=720"
    },
    "price": 1900,
    "location": "Amsterdam",
    "country": "Netherlands",
    "geometry": "Netherlands"
  },
  {
    "title": "Canalside Elegance",
    "description": "Immerse yourself in the elegance of Amsterdam's canals in this historic canal house. A blend of history and modern comfort.",
    "image": {
      "filename": "canalsideelegance3",
      "url": "https://a0.muscache.com/im/pictures/be572cad-b5df-4c0d-aad4-cab833f153d6.jpg?im_w=720"
    },
    "price": 2000,
    "location": "Amsterdam",
    "country": "Netherlands",
    "geometry": "Netherlands"
  },
  {
    "title": "Canal Charmer Retreat",
    "description": "Retreat to this charming canal house in Amsterdam. A perfect blend of old-world charm and modern amenities awaits your stay.",
    "image": {
      "filename": "canalcharmer4",
      "url": "https://a0.muscache.com/im/pictures/1801c9aa-9ba2-42c1-9ce2-3f20b66fe512.jpg?im_w=720"
    },
    "price": 1800,
    "location": "Amsterdam",
    "country": "Netherlands",
    "geometry": "Netherlands"
  },
  {
    "title": "Canal View Haven",
    "description": "Find haven in this historic canal house with breathtaking canal views. A tranquil retreat in the heart of Amsterdam.",
    "image": {
      "filename": "canalviewhaven5",
      "url": "https://a0.muscache.com/im/pictures/3aa5d442-7f10-4bf3-aa3a-af8e902083d2.jpg?im_w=720"
    },
    "price": 2200,
    "location": "Amsterdam",
    "country": "Netherlands",
    "geometry": "Netherlands"
  },
  {
    "title": "Canalfront Retreat",
    "description": "Escape to this charming canalfront retreat in Amsterdam. Enjoy the historic charm and scenic beauty of the city's iconic canals.",
    "image": {
      "filename": "canalfront6",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-41056829/original/c723d9bc-3880-41ee-8c2c-72d76e8b6f60.jpeg?im_w=720"
    },
    "price": 2100,
    "location": "Amsterdam",
    "country": "Netherlands",
    "geometry": "Netherlands"
  },
  {
    "title": "Canal Elegance Residency",
    "description": "Indulge in the timeless elegance of this canal house residency in the heart of Amsterdam. A historic gem with modern comforts.",
    "image": {
      "filename": "canalelegance7",
      "url": "https://a0.muscache.com/im/pictures/4b3aeb78-8dec-4eb4-bc9d-3123615b4be7.jpg?im_w=720"
    },
    "price": 2400,
    "location": "Amsterdam",
    "country": "Netherlands",
    "geometry": "Netherlands"
  },
  {
    "title": "Quaint Canal House",
    "description": "Discover the charm of this quaint canal house in Amsterdam. A peaceful retreat with a touch of historic allure.",
    "image": {
      "filename": "quaintcanal8",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-52567212/original/0798a5ad-41c8-4cad-ab57-12ffe80c6c61.jpeg?im_w=720"
    },
    "price": 2000,
    "location": "Amsterdam",
    "country": "Netherlands",
    "geometry": "Netherlands"
  },
  {
    "title": "Velvet Horizon Retreat",
    "description": "Experience the velvety touch of luxury with a horizon that stretches to infinity.",
    "image": {
      "filename": "velvet_horizon",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-730776239496393208/original/08f9838b-dd8f-4fd8-869a-fbbcda5daadc.jpeg?im_w=720"
    },
    "price": 8900,
    "location": "Maldives",
    "country": "Maldives",
    "geometry": "Maldives"
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/a3e41a30-dc6a-4cd8-9941-e8ec106b179f.jpg?im_w=720",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry:"United States"
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/6d7b8e4b-5abf-4994-bd53-843695f00ad0.jpg?im_w=720",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/d81912fe-74bd-4574-92c8-f560320d4ef1.jpg?im_w=720",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-848521969968742794/original/342ce6b8-6ccd-49c1-bc59-6d55ddd6ecdd.jpeg?im_w=720",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/1f4dd361-b2a3-4a83-abd1-115bf2e0b6cb.jpg?im_w=720",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-783048916405933459/original/01cd1247-8457-43ea-8a4e-168b0e331f50.jpeg?im_w=720",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/4808a5d7-e573-4a0c-a907-7fe427763ec9.jpg?im_w=720",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/69765948-1164-4ec4-928f-197a171e1bfb.jpg?im_w=720",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/09c42ab0-4848-4910-957e-b0c9630b8804.jpg?im_w=720",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/acaaa1e1-6dee-4ee5-9bfb-a3088a46d75a.jpg?im_w=720",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/ee306cfc-4651-41c6-b534-cf63e4d38a21.jpg?im_w=720",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    
    geometry: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-827496443091774604/original/3a86304d-e6a2-4db5-866a-69dca1ffcec6.jpeg?im_w=720",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    
    geometry: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/b4ddf9b7-a56e-4f3d-bf1c-9cc79f010d59.jpg?im_w=720",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    
    geometry: "United Kingdom",
   
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/b4e3a7c9-0766-49fd-ad9a-16a20c8761e3.jpg?im_w=720",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    
    geometry: "United Kingdom",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/e923a0b9-4642-49c7-9bc5-18f2b4cf0b19.jpg?im_w=720",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    
    geometry: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50713136/original/33b4c642-c4a9-4c01-ac66-5d83648580b9.jpeg?im_w=720",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    
    geometry: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/47339616-2232-4cc3-b1e4-2006449fe086.jpg?im_w=720",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    
    geometry: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52291644/original/5b1c55eb-312d-4fea-99fe-2d95ea408006.jpeg?im_w=720",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
   
    geometry: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/3d390513-1e7d-42e4-8f15-777c536e8a02.jpg?im_w=720",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    
    geometry: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/5b1d1051-2a42-48b2-8e20-44af486fc038.jpg?im_w=720",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/54de1faa-1382-4fef-a5f2-95c74abec64a.jpg?im_w=720",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    
    geometry: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/54de1faa-1382-4fef-a5f2-95c74abec64a.jpg?im_w=720",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    
    geometry: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-681645417000773663/original/75f1cb7c-1c4d-48d6-b108-7a36f9f0af7e.jpeg?im_w=720",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    
    geometry: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/8af04d7a-6661-4a21-b49b-308bfccf21c7.jpg?im_w=720",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    
    geometry: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/6e498221-c227-4573-90cd-cdd938bcdb05.jpg?im_w=720",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    
    geometry: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/488829ac-caf4-4da1-8a5c-9de06c09d0a5.jpg?im_w=720",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    
    geometry: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-963511701974908404/original/e1482090-a787-4c2c-8a13-7c625b7e082c.jpeg?im_w=720",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
   
    geometry: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-783048916405933459/original/01cd1247-8457-43ea-8a4e-168b0e331f50.jpeg?im_w=720",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    
    geometry: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/39342094/eeb41b9d_original.jpg?im_w=720",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
   
    geometry: "Costa Rica",
  },
  {
    "title": "Private Oceanfront Villa in Bali",
    "description": "Indulge in tranquility at our private oceanfront villa in Bali. Enjoy breathtaking views and a serene atmosphere.",
    "image": {
      "filename": "bali_villa",
      "url": "https://a0.muscache.com/im/pictures/03f7c18d-9f8e-4d51-84bb-49281d60e040.jpg?im_w=720"
    },
    "price": 2200,
    "location": "Bali",
    "country": "Indonesia",
    
    geometry: "Indonesia",
  },  
  {
    "title": "Luxury Villa in the Maldives",
    "description": "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    "image": {
      "filename": "listingimage",
      "url": "https://a0.muscache.com/im/pictures/6d7b8e4b-5abf-4994-bd53-843695f00ad0.jpg?im_w=720"
    },
    "price": 6000,
    "location": "Maldives",
    "country": "Maldives",
   
    geometry: "Maldives",
  },
  {
    "title": "Ocean Paradise Villa",
    "description": "Escape to this exclusive overwater villa with breathtaking ocean views.",
    "image": {
      "filename": "ocean_paradise",
      "url": "https://a0.muscache.com/im/pictures/46dc4102-8cb5-4733-b77f-3f3812a63b10.jpg?im_w=720"
    },
    "price": 7500,
    "location": "Maldives",
    "country": "Maldives",
    
    geometry:"Maldives",
  },
  {
    "title": "Sunset Bliss Retreat",
    "description": "Experience the ultimate luxury with mesmerizing sunset views from your private villa.",
    "image": {
      "filename": "sunset_bliss",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-7327364/original/3f0dabdd-7cbf-4bea-9622-ba426b6fa4a4.jpeg?im_w=720"
    },
    "price": 8500,
    "location": "Maldives",
    "country": "Maldives",
    
    geometry: "Maldives",
  },
  {
    "title": "Royal Oasis Haven",
    "description": "Indulge in regal luxury and opulence at this exclusive overwater retreat.",
    "image": {
      "filename": "royal_oasis",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-21587114/original/40b7cdc2-5649-4ced-a59f-4ab602590d80.jpeg?im_w=720"
    },
    "price": 10000,
    "location": "Maldives",
    "country": "Maldives",
    
    geometry: "Maldives",
  },
  {
    "title": "Royal Oasis Haven",
    "description": "Indulge in regal luxury and opulence at this exclusive overwater retreat.",
    "image": {
      "filename": "royal_oasis",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-52065547/original/a88b5239-d645-489f-ac4f-8aa237774a0e.jpeg?im_w=720"
    },
    "price": 10000,
    "location": "Maldives",
    "country": "Maldives",
  
    geometry: "Maldives",
  },
  {
    "title": "Azure Serenity Villa",
    "description": "Relax in the serenity of azure waters surrounding this exquisite overwater villa.",
    "image": {
      "filename": "azure_serenity",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-735285823136975256/original/60d39ba1-0931-4f35-bea2-b12e223379ac.jpeg?im_w=720"
    },
    "price": 9000,
    "location": "Maldives",
    "country": "Maldives",
  
    geometry: "Maldives",
  },
  {
    "title": "Tropical Elegance Retreat",
    "description": "Embrace tropical elegance in this secluded overwater villa with lush surroundings.",
    "image": {
      "filename": "tropical_elegance",
      "url": "https://a0.muscache.com/im/pictures/d7d67540-081b-4efb-8d99-ee2c299c6d1c.jpg?im_w=720"
    },
    "price": 8000,
    "location": "Maldives",
    "country": "Maldives",
   
    geometry: "Maldives",
  },
  {
    "title": "Ocean Paradise Villa",
    "description": "Escape to this exclusive overwater villa with breathtaking ocean views.",
    "image": {
      "filename": "ocean_paradise",
      "url": "https://a0.muscache.com/im/pictures/b1b1e9e1-cd68-4a08-b6fd-4c0bda2b3961.jpg?im_w=720"
    },
    "price": 7500,
    "location": "Maldives",
    "country": "Maldives",
   
    geometry: "Maldives",
  },
  {
    "title": "Sunset Bliss Retreat",
    "description": "Experience the ultimate luxury with mesmerizing sunset views from your private villa.",
    "image": {
      "filename": "sunset_bliss",
      "url": "https://a0.muscache.com/im/pictures/cd5db2d1-f076-4224-82fc-24297ada4ae5.jpg?im_w=720"
    },
    "price": 8500,
    "location": "Maldives",
    "country": "Maldives",
    geometry: "Maldives",
  },
  {
    "title": "Royal Oasis Haven",
    "description": "Indulge in regal luxury and opulence at this exclusive overwater retreat.",
    "image": {
      "filename": "royal_oasis",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-544181571388508964/original/b8311341-725f-4bfc-9cf2-fda0a1687ec3.jpeg?im_w=720"
    },
    "price": 10000,
    "location": "Maldives",
    "country": "Maldives",
   
    geometry: "Maldives",
  },
  {
    "title": "Azure Serenity Villa",
    "description": "Relax in the serenity of azure waters surrounding this exquisite overwater villa.",
    "image": {
      "filename": "azure_serenity",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-689541798005077687/original/f3e0495f-c401-4f13-92e1-833aedc80030.jpeg?im_w=720"
    },
    "price": 9000,
    "location": "Maldives",
    "country": "Maldives",
   
    geometry: "Maldives",
  },
  {
    "title": "Tropical Elegance Retreat",
    "description": "Embrace tropical elegance in this secluded overwater villa with lush surroundings.",
    "image": {
      "filename": "tropical_elegance",
      "url": "https://a0.muscache.com/im/pictures/70279853/dc66ef2c_original.jpg?im_w=720"
    },
    "price": 8000,
    "location": "Maldives",
    "country": "Maldives",
  
    geometry: "Maldives",
  },
  {
    "title": "Crystal Clear Oasis",
    "description": "Discover the beauty of crystal-clear waters in this overwater villa surrounded by marine life.",
    "image": {
      "filename": "crystal_clear_oasis",
      "url": "https://a0.muscache.com/im/pictures/02866ea4-f23a-4357-84f6-579a2b9f5e0f.jpg?im_w=720"
    },
    "price": 9200,
    "location": "Maldives",
    "country": "Maldives",
   
    geometry: "Maldives",
  },
  {
    "title": "Golden Sands Retreat",
    "description": "Step into luxury with golden sandy beaches and a private overwater villa experience.",
    "image": {
      "filename": "golden_sands",
      "url": "https://a0.muscache.com/im/pictures/dd26dc0d-a5af-4ec2-94eb-d0117e481f69.jpg?im_w=720"
    },
    "price": 7800,
    "location": "Maldives",
    "country": "Maldives",
  
    geometry: "Maldives",
  },
  {
    "title": "Emerald Isle Sanctuary",
    "description": "Escape to an emerald paradise with lush greenery surrounding your overwater villa.",
    "image": {
      "filename": "emerald_isle",
      "url": "https://a0.muscache.com/im/pictures/6d7b8e4b-5abf-4994-bd53-843695f00ad0.jpg?im_w=720"
    },
    "price": 8300,
    "location": "Maldives",
    "country": "Maldives",
  
    geometry: "Maldives",
  },
  {
    "title": "Pearl Perfection Villa",
    "description": "Experience perfection in this overwater villa with views of pearl-like sandy shores.",
    "image": {
      "filename": "pearl_perfection",
      "url": "https://a0.muscache.com/im/pictures/64205800/da952d88_original.jpg?im_w=720"
    },
    "price": 8800,
    "location": "Maldives",
    "country": "Maldives",

    geometry: "Maldives",
  },
  {
    "title": "Sapphire Serenade Haven",
    "description": "Serenade your senses in this overwater villa surrounded by the deep blue hues of the Indian Ocean.",
    "image": {
      "filename": "sapphire_serenade",
      "url": "https://a0.muscache.com/im/pictures/b246efbf-3647-4ef0-9b53-743d913250e4.jpg?im_w=720"
    },
    "price": 9500,
    "location": "Maldives",
    "country": "Maldives",
    
    geometry: "Maldives",
  },
  {
    "title": "Velvet Horizon Retreat",
    "description": "Experience the velvety touch of luxury with a horizon that stretches to infinity.",
    "image": {
      "filename": "velvet_horizon",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-19682270/original/11143478-80c3-4945-8b88-b30819c19eaa.jpeg?im_w=720"
    },
    "price": 8900,
    "location": "Maldives",
    "country": "Maldives",
  
    geometry: "Maldives",
  },
  {
    "title": "Island Majesty Villa",
    "description": "Bask in the majesty of island life with a private villa offering unparalleled luxury.",
    "image": {
      "filename": "island_majesty",
      "url": "https://a0.muscache.com/im/pictures/36cc244f-62b2-4951-8c57-1da454d26a45.jpg?im_w=720"
    },
    "price": 9700,
    "location": "Maldives",
    "country": "Maldives",
  
    geometry: "Maldives",
  },
  {
    "title": "Coral Cove Sanctuary",
    "description": "Immerse yourself in the vibrant colors of coral reefs surrounding this overwater sanctuary.",
    "image": {
      "filename": "coral_cove",
      "url": "https://a0.muscache.com/im/pictures/f4214ef4-8263-46c0-920f-52fdc080206e.jpg?im_w=720"
    },
    "price": 8100,
    "location": "Maldives",
    "country": "Maldives",
    
    geometry: "Maldives",
  },
  {
    "title": "Diamond Lagoon Retreat",
    "description": "Escape to a lagoon-side retreat with diamond-clear waters and unparalleled luxury.",
    "image": {
      "filename": "diamond_lagoon",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-22754335/original/58ba17da-c8e4-48c9-8e57-fd35f6440df3.jpeg?im_w=720"
    },
    "price": 9800,
    "location": "Maldives",
    "country": "Maldives",
    
    geometry: "Maldives",
  },
  {
    "title": "Platinum Sands Villa",
    "description": "Bask in the platinum sands surrounding your private overwater villa in the Maldives.",
    "image": {
      "filename": "platinum_sands",
      "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061463378616582524/original/07f1afed-44cb-429e-a794-e9fe674051ad.jpeg?im_w=720"
    },
    "price": 8700,
    "location": "Maldives",
    "country": "Maldives",
    
    geometry: "Maldives",
  },
  {
    "title": "Mystic Moonlight Haven",
    "description": "Experience mystic moonlit nights in this overwater haven with unrivaled elegance.",
    "image": {
      "filename": "mystic_moonlight",
      "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1059835496185405643/original/32da6f5a-5d1d-4d43-80dc-c4c45be38953.jpeg?im_w=720"
    },
    "price": 9300,
    "location": "Maldives",
    "country": "Maldives",
    
    geometry: "Maldives",
  },
  {
    "title": "Rainforest Mirage Villa",
    "description": "Immerse yourself in a mirage of luxury amidst the lush rainforests of the Maldives.",
    "image": {
      "filename": "rainforest_mirage",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1003557451253003128/original/c3ea4e01-33a0-4228-945e-28e579402310.jpeg?im_w=720"
    },
    "price": 9100,
    "location": "Maldives",
    "country": "Maldives",
    
    geometry: "Maldives",
  },
  {
    "title": "Opal Oasis Retreat",
    "description": "Discover an oasis of opulence in this overwater villa with opal-like shimmering waters.",
    "image": {
      "filename": "opal_oasis",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1030608811530172113/original/21841bef-4c6b-498d-b7af-5fe68aca55ff.jpeg?im_w=720"
    },
    "price": 9600,
    "location": "Maldives",
    "country": "Maldives",
    
    geometry: "Maldives",
  },
  {
    "title": "Silken Shores Sanctuary",
    "description": "Relish the silken touch of luxury with shores that beckon tranquility and sophistication.",
    "image": {
      "filename": "silken_shores",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1040311320013732507/original/8550b198-e310-4b1a-92bf-c2a47c0f3438.jpeg?im_w=720"
    },
    "price": 9400,
    "location": "Maldives",
    "country": "Maldives",
    
    geometry: "Maldives",
  },
  {
    "title": "Crimson Cove Villa",
    "description": "Immerse yourself in the vibrant crimson hues of this overwater villa surrounded by nature.",
    "image": {
      "filename": "crimson_cove",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1045854960701532360/original/862245f6-4040-4ae2-ab39-87a008084da5.jpeg?im_w=720"
    },
    "price": 8900,
    "location": "Maldives",
    "country": "Maldives",
   
    geometry: "Maldives",
  },
  {
    "title": "Turquoise Tranquility Haven",
    "description": "Indulge in the tranquil shades of turquoise surrounding this exclusive overwater haven.",
    "image": {
      "filename": "turquoise_tranquility",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1044094002562232437/original/348315af-9712-46f7-824d-21dafb69a5d6.jpeg?im_w=720"
    },
    "price": 9000,
    "location": "Maldives",
  
    "country": "Maldives",
    geometry: "Maldives",
  },
  {
    "title": "Enchanted Eden Villa",
    "description": "Discover an enchanted Eden in this overwater villa with a perfect blend of luxury and nature.",
    "image": {
      "filename": "enchanted_eden",
      "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1077493160606721804/original/4de92d8c-960c-4f63-a9d6-1d3c019cb491.jpeg?im_w=720"
    },
    "price": 9700,
    "location": "Maldives",
    "country": "Maldives",
   
    geometry: "Maldives",
  },     
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1500,
    "location": "Malibu",
    "country": "United States",
    "geometry": "United States"
  },
   {
     "title": "Seaside Retreat",
     "description": "Discover serenity at this beautiful seaside retreat. Breathtaking views and a tranquil atmosphere await you.",
     "image": {
       "filename": "listingimage2",
       "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1065425846525647011/original/9950ae11-0d8d-46de-9953-d7f097cde7ab.jpeg?im_w=720"
     },
     "price": 1200,
     "location": "Santa Barbara",
     "country": "United States",
     "geometry": "United States"
   },
  /////////////////////////////////////
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    "image": {
      "filename": "listingimage",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1044964824215678482/original/b11c839f-d2f6-4e58-b62c-837d782456c5.jpeg?im_w=720"
    },
    "price": 1500,
    "location": "Malibu",
    "country": "United States",
    "geometry": "United States"
  },
  {
    "title": "Seaside Retreat",
    "description": "Discover serenity at this beautiful seaside retreat. Breathtaking views and a tranquil atmosphere await you.",
    "image": {
      "filename": "listingimage2",
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-39986130/original/8a6cde11-7be0-44a0-a208-e4740cd5efb7.jpeg?im_w=720"
    },
    "price": 1200,
    "location": "Santa Barbara",
    "country": "United States",
    "geometry": "United States"
  }, 
  
    {
      "title": "Sunset Haven",
      "description": "Unwind at this cozy cottage with breathtaking sunset views. A perfect retreat for nature lovers.",
      "image": {
        "filename": "listingimage3",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1041986559857970091/original/68eecbfe-9592-4c58-ab79-be5c3736fa93.jpeg?im_w=720"
      },
      "price": 1800,
      "location": "Monterey",
      "country": "United States",
      "geometry": "United States"
    },
    {
      "title": "Rustic Coastal Cabin",
      "description": "Experience the charm of a rustic coastal cabin surrounded by nature. A perfect escape from the hustle and bustle.",
      "image": {
        "filename": "listingimage4",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-942101530290423016/original/202a22ee-1cb6-4d94-8bc8-7c20f2f539d0.jpeg?im_w=720"
      },
      "price": 1300,
      "location": "Big Sur",
      "country": "United States",
      "geometry": "United States"
    },
    {
      "title": "Oceanfront Paradise",
      "description": "Indulge in luxury at this oceanfront paradise. Modern amenities and stunning views create an unforgettable experience.",
      "image": {
        "filename": "listingimage5",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1067506863191780660/original/b932b018-b535-48c8-b283-9f2363e3c248.jpeg?im_w=720"
      },
      "price": 2200,
      "location": "Carmel-by-the-Sea",
      "country": "United States",
      "geometry": "United States"
    },
      {
        "title": "Tranquil Beach Bungalow",
        "description": "Relax in this tranquil beach bungalow surrounded by palm trees. Perfect for a peaceful getaway by the sea.",
        "image": {
          "filename": "listingimage6",
          "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1072744336417777035/original/49254d5c-549a-47c9-a130-598f5485c9ea.jpeg?im_w=720"
        },
        "price": 1600,
        "location": "Laguna Beach",
        "country": "United States",
        "geometry": "United States"
      },
      {
        "title": "Cliffside Retreat",
        "description": "Perched on a cliff, this retreat offers panoramic views of the coastline. Experience the beauty of nature in luxury.",
        "image": {
          "filename": "listingimage7",
          "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061531706741941567/original/55047fb9-bd9b-4ff5-8fe8-15ae32c5b234.jpeg?im_w=720"
        },
        "price": 2000,
        "location": "San Diego",
        "country": "United States",
        "geometry": "United States"
      },
      {
        "title": "Coastal Chic Villa",
        "description": "Step into luxury at this coastal chic villa. Stylish decor and oceanfront views create an elegant and serene atmosphere.",
        "image": {
          "filename": "listingimage8",
          "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061531706741941567/original/55047fb9-bd9b-4ff5-8fe8-15ae32c5b234.jpeg?im_w=720"
        },
        "price": 1800,
        "location": "Huntington Beach",
        "country": "United States",
        "geometry": "United States"
      },
        {
          "title": "Secluded Coastal Cabin",
          "description": "Escape to this secluded coastal cabin surrounded by nature. Disconnect and rejuvenate in the peaceful ambiance.",
          "image": {
            "filename": "listingimage9",
            "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1053183735616199111/original/59172454-da55-48a5-80e4-3033f37e476a.jpeg?im_w=720"
          },
          "price": 1400,
          "location": "Oceanside",
          "country": "United States",
          "geometry": "United States"
        },
        {
          "title": "Beachside Zen Cottage",
          "description": "Experience serenity at this beachside Zen cottage. Enjoy the sound of waves and find your inner peace by the sea.",
          "image": {
            "filename": "listingimage10",
            "url": "https://a0.muscache.com/im/pictures/miso/Hosting-998824772153997755/original/345a3848-23ce-4089-b9cd-fb163999a6f9.jpeg?im_w=720"
          },
          "price": 1600,
          "location": "Encinitas",
          "country": "United States",
          "geometry": "United States"
        },
        {
          "title": "Desert Oasis 1 in Dubai",
          "description": "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
          "image": {
            "filename": "listingimage1",
            "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1075670876681355544/original/22ac9a4c-d47a-4500-9264-5d5844a82b55.jpeg?im_w=720"
          },
          "price": 5000,
          "location": "Dubai",
          "country": "United Arab Emirates",
          "geometry": "United Arab Emirates"
        },
        {
          "title": "Desert Oasis 2 in Dubai",
          "description": "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
          "image": {
            "filename": "listingimage2",
            "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1029047747112249067/original/db1aa9e3-3b16-4a08-86e0-e014a73f8e4f.jpeg?im_w=720"
          },
          "price": 5000,
          "location": "Dubai",
          "country": "United Arab Emirates",
          "geometry": "United Arab Emirates"
        },

          {
            "title": "Luxury Desert Retreat",
            "description": "Indulge in opulence at this exclusive desert retreat in Dubai. A haven of tranquility with a private pool and breathtaking views.",
            "image": {
              "filename": "desertretreat1",
              "url": "https://a0.muscache.com/im/pictures/69bbc96c-496a-4a10-b729-dad4849948b4.jpg?im_w=720"
            },
            "price": 5500,
            "location": "Dubai",
            "country": "United Arab Emirates",
            "geometry": "United Arab Emirates"
          },
          {
            "title": "Golden Sands Oasis",
            "description": "Discover the epitome of luxury in this oasis surrounded by golden sands. Immerse yourself in elegance and sophistication.",
            "image": {
              "filename": "goldensands2",
              "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1060856967590865402/original/49edf0ec-c8c3-42ab-a9b3-06ce4646fa7a.jpeg?im_w=720"
            },
            "price": 5200,
            "location": "Dubai",
            "country": "United Arab Emirates",
            "geometry": "United Arab Emirates"
          },
         
        {
  "title": "Sands of Serenity",
  "description": "Immerse yourself in the tranquil sands of serenity at this luxurious desert escape in Dubai. Experience ultimate relaxation with a private pool.",
  "image": {
    "filename": "serenitysands1",
    "url": "https://a0.muscache.com/im/pictures/hosting/Hosting-1032884776397315662/original/ee9dbe29-259d-4dcf-9963-81d1fa6b7ad9.jpeg?im_w=720"
  },
  "price": 5800,
  "location": "Dubai",
  "country": "United Arab Emirates",
  "geometry": "United Arab Emirates"
},
{
  "title": "Royal Mirage Retreat",
  "description": "Step into the lap of luxury at the Royal Mirage Retreat in Dubai. A regal experience awaits you with majestic views and a private oasis.",
  "image": {
    "filename": "royalmirage2",
    "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1034522461800310831/original/36f85a9b-2139-4539-80cf-d6f68d179df1.jpeg?im_w=720"
  },
  "price": 6000,
  "location": "Dubai",
  "country": "United Arab Emirates",
  "geometry": "United Arab Emirates"
},
{
  "title": "Golden Dunes Villa",
  "description": "Bask in the splendor of the golden dunes at this luxurious villa in Dubai. A perfect blend of comfort and sophistication.",
  "image": {
    "filename": "goldendunes3",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1038042838655339722/original/91018727-891f-4411-9dc9-cabed4e5dd39.jpeg?im_w=720"
  },
  "price": 5400,
  "location": "Dubai",
  "country": "United Arab Emirates",
  "geometry": "United Arab Emirates"
},
{
  "title": "Eternal Sands Retreat",
  "description": "Experience eternity in the midst of the sands at this exclusive retreat. A sanctuary of peace and luxury in the heart of Dubai.",
  "image": {
    "filename": "eternalsands4",
    "url": "https://a0.muscache.com/im/pictures/010bcdaa-453d-4033-8e25-e44ed5d6aa06.jpg?im_w=720"
  },
  "price": 5600,
  "location": "Dubai",
  "country": "United Arab Emirates",
  "geometry": "United Arab Emirates"
},
{
  "title": "Dunes Delight Villa",
  "description": "Discover delight amidst the dunes at this exquisite villa in Dubai. Immerse yourself in luxury and embrace the beauty of the desert.",
  "image": {
    "filename": "dunesdelight5",
    "url": "https://a0.muscache.com/im/pictures/hosting/Hosting-1075379136214231379/original/ff1b129e-f4df-403f-8577-07ee18b12ebc.jpeg?im_w=720"
  },
  "price": 5800,
  "location": "Dubai",
  "country": "United Arab Emirates",
  "geometry": "United Arab Emirates"
},
{
  "title": "Sands of Serenity",
  "description": "Indulge yourself in the serene sands at this tranquil desert retreat in Dubai. Experience the epitome of relaxation and luxury.",
  "image": {
    "filename": "sandsserenity6",
    "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1046502880459080405/original/0b43c88b-96e0-4789-8d8e-0f4ca00d660c.jpeg?im_w=720"
  },
  "price": 5400,
  "location": "Dubai",
  "country": "United Arab Emirates",
  "geometry": "United Arab Emirates"
},
{
  "title": "Royal Sands Villa",
  "description": "Experience royalty amidst the sands at this majestic villa in Dubai. A perfect blend of grandeur and tranquility awaits you.",
  "image": {
    "filename": "royalsands7",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1024386168251861784/original/3c47b013-819c-473b-9a1a-2a319877866b.jpeg?im_w=720"
  },
  "price": 6000,
  "location": "Dubai",
  "country": "United Arab Emirates",
  "geometry": "United Arab Emirates"
},
{
  "title": "Sunset Mirage Retreat",
  "description": "Witness the magic of sunsets at this mirage retreat in Dubai. Immerse yourself in luxury with panoramic views and a private oasis.",
  "image": {
    "filename": "sunsetmirage8",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1028870093344270736/original/44fbfe42-1a85-49a8-83d7-da12c5de28b8.jpeg?im_w=720"
  },
  "price": 5700,
  "location": "Dubai",
  "country": "United Arab Emirates",
  "geometry": "United Arab Emirates"
},
{
  "title": "Dazzling Dunes Villa",
  "description": "Embark on a journey of luxury at the dazzling dunes villa in Dubai. A blend of sophistication and desert charm awaits your arrival.",
  "image": {
    "filename": "dazzlingdunes9",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1018794961698596584/original/3dd56e8f-ad3f-4802-9605-6ebe1a3edfe3.jpeg?im_w=720"
  },
  "price": 5900,
  "location": "Dubai",
  "country": "United Arab Emirates",
  "geometry": "United Arab Emirates"
},
{
  "title": "Ethereal Sands Retreat",
  "description": "Escape to the ethereal sands retreat in Dubai, where luxury meets nature. Immerse yourself in a world of tranquility and grandeur.",
  "image": {
    "filename": "etherealsands10",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-721540609203378406/original/9dfaf7d6-40f2-4673-b468-7c5ab3147f86.jpeg?im_w=720"
  },
  "price": 6100,
  "location": "Dubai",
  "country": "United Arab Emirates",
  "geometry": "United Arab Emirates"
},
{
  "title": "Historic Canal House 1",
  "description": "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
  "image": {
    "filename": "listingimage1",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-938390308512137866/original/f2ff61cb-2fdb-466b-a41f-c04ef59ddfce.jpeg?im_w=720"
  },
  "price": 1800,
  "location": "Amsterdam",
  "country": "Netherlands",
  "geometry": "Netherlands"
},
{
  "title": "Historic Canal House 2",
  "description": "Experience the charm of Amsterdam in this beautifully preserved canal house. Immerse yourself in the city's rich history.",
  "image": {
    "filename": "listingimage2",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-730884644046569848/original/23cba0d9-2fcd-4720-a41d-f66092e17a00.jpeg?im_w=720"
  },
  "price": 1900,
  "location": "Amsterdam",
  "country": "Netherlands",
  "geometry": "Netherlands"
},
{
  "title": "Canalside Elegance",
  "description": "Immerse yourself in the elegance of Amsterdam's canals in this historic canal house. A blend of history and modern comfort.",
  "image": {
    "filename": "canalsideelegance3",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-874686035326211853/original/ce3819b6-38cc-43b7-98b1-d0583a999752.jpeg?im_w=720"
  },
  "price": 2000,
  "location": "Amsterdam",
  "country": "Netherlands",
  "geometry": "Netherlands"
},
{
  "title": "Canal Charmer Retreat",
  "description": "Retreat to this charming canal house in Amsterdam. A perfect blend of old-world charm and modern amenities awaits your stay.",
  "image": {
    "filename": "canalcharmer4",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-730884644046569848/original/23cba0d9-2fcd-4720-a41d-f66092e17a00.jpeg?im_w=720"
  },
  "price": 1800,
  "location": "Amsterdam",
  "country": "Netherlands",
  "geometry": "Netherlands"
},
{
  "title": "Canal View Haven",
  "description": "Find haven in this historic canal house with breathtaking canal views. A tranquil retreat in the heart of Amsterdam.",
  "image": {
    "filename": "canalviewhaven5",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-952882552582987523/original/c55198ab-e612-4ca2-ab77-9d5e13140da6.jpeg?im_w=720"
  },
  "price": 2200,
  "location": "Amsterdam",
  "country": "Netherlands",
  "geometry": "Netherlands"
},
{
  "title": "Canalfront Retreat",
  "description": "Escape to this charming canalfront retreat in Amsterdam. Enjoy the historic charm and scenic beauty of the city's iconic canals.",
  "image": {
    "filename": "canalfront6",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1051945180134067169/original/0b398a58-cf56-4e67-bb62-d8c572c5025e.jpeg?im_w=720"
  },
  "price": 2100,
  "location": "Amsterdam",
  "country": "Netherlands",
  "geometry": "Netherlands"
},
{
  "title": "Canal Elegance Residency",
  "description": "Indulge in the timeless elegance of this canal house residency in the heart of Amsterdam. A historic gem with modern comforts.",
  "image": {
    "filename": "canalelegance7",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-952914651862658637/original/ba39b06c-3899-41e2-9f71-919b6ab4f64a.jpeg?im_w=720"
  },
  "price": 2400,
  "location": "Amsterdam",
  "country": "Netherlands",
  "geometry": "Netherlands"
},
{
  "title": "Quaint Canal House",
  "description": "Discover the charm of this quaint canal house in Amsterdam. A peaceful retreat with a touch of historic allure.",
  "image": {
    "filename": "quaintcanal8",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-769683670068445218/original/8ebc94e8-b000-4c8b-9b2d-02495f410be0.jpeg?im_w=720"
  },
  "price": 2000,
  "location": "Amsterdam",
  "country": "Netherlands",
  "geometry": "Netherlands"
},
{
  "title": "Velvet Horizon Retreat",
  "description": "Experience the velvety touch of luxury with a horizon that stretches to infinity.",
  "image": {
    "filename": "velvet_horizon",
    "url": "https://a0.muscache.com/im/pictures/miso/Hosting-826134718441577316/original/da0692f3-d54d-4af4-a35e-75e2f6aee135.jpeg?im_w=720"
  },
  "price": 8900,
  "location": "Maldives",
  "country": "Maldives",
  "geometry": "Maldives"
},

         
       
];
  
  
  
  module.exports = { data: sampleListings };