const locations = [
    {surprise: 'Tiwanaku, Bolivia', destination: 'Bolivia', image: require('../assets/TiwanakuBolivia.jpg'), text: 'Near Lake Titicaca in Western Bolivia, the Pre-Columbian adobe city of Tiwanaku built circa 500 AD still stands, though today the ancient city looks much more like an art installation than the bustling empire it once was.'},
    {surprise: 'Rome, Italy', destination: 'Italy', image: require('../assets/RomeItaly.jpg'), text: 'Founded by twin sons Romulus and Remus in 753 BC, Rome tops everyone’s list of ancient cities because, well, all roads lead to the Italian capital.'},
    {surprise: 'Choquequirao, Peru', destination: 'Peru', image: require('../assets/ChoqPeru.jpg'), text: 'High in the Andes, Choquequirao is a lost stone mountaintop city similar to Machu Picchu, yet largely undiscovered—in fact, archeologists have only unearthed 30% of it because the area is so remote.'},
    {surprise: 'Pompeii, Italy', destination: 'Italy', image: require('../assets/PompeiiItaly.jpg'), text: 'Our favorite thing about the volcano-stricken town of Pompeii? It combines eye-popping ancient sites like the ruins of Scavi di Pompei and Stabian Baths as well as the comparatively modern 1901 Sanctuary of the Madonna of the Rosary with pampering activities like wine-tasting jaunts through vineyards like the Castina del Vesuvio at the foot of Mount Vesuvius.'},
    {surprise: 'Delphi, Greece', destination: 'Greece', image: require('../assets/DelphiGreece.jpg'), text: 'Greek God Apollo supposedly lived on this mountaintop perch, which explains its heavenly appeal.'},
    {surprise: 'Angkor Wat, Cambodia', destination: 'Cambodia', image: require('../assets/AngorCamb.jpg'), text: 'The 9th-Century capitol of the Khmer Empire is big—154 square miles big. Zero in on the most important sites, like the unmissable Temple of Angkor Wat, which took 30 years to build and is reportedly the largest religious building on earth, and Bayon Temple, which has 200 carved stone faces adorning its exterior.'},
    {surprise: 'Petra, Jordan', destination: 'Jordan', image: require('../assets/PetraJordan.jpg'), text: 'The tombs and temples of Petra were carved into the salmon-hued sandstone of this former Nabatean Kingdom circa 300 BC.'},
    {surprise: 'Venice, Italy', destination: 'Italy', image: require('../assets/VeniceItaly.jpg'), text: 'The medieval city is postcard-perfect, its intricate network of canals wending through ancient cobbled alleys and under bridges, a window into the Italy of the 5th century.'},
    {surprise: 'Great Barrier Reef, Australia', destination: 'Australia', image: require('../assets/ReefAustralia.jpg'), text: 'Stretching some 1,200 miles along Australia’s Queensland coast, this bio-diverse natural wonder contains the largest existing cover of coral reefs and remains the only living thing that can be seen from space—yet even a landform of this size cannot evade the small yet devastating changes in the Earth’s atmosphere.'},
    {surprise: 'The Maldives, South Asia', destination: 'India', image: require('../assets/MalivesAsia.jpg'), text: 'It doesn’t get much more utopian than this 26-atoll tropical paradise in the middle of Nowheresville, Indian Ocean, with its sugar-white beaches, vast coral reefs, and turquoise waters that stretch endlessly into the horizon.'},
    {surprise: 'Tsukiji Fish Market, Tokyo', destination: 'Tokyo', image: require('../assets/FishTokyo.jpg'), text: 'The world’s largest fish market is a sight to behold: for generations, throngs of tourists and locals have shuffled through the wholesale arcade of 1,200 stalls, haggling with fishmongers for fresh catches of the day, from swordfish and caviar to seaweed and salmon.'},
    {surprise: 'Taj Mahal, India', destination: 'India', image: require('../assets/TajIndia.jpg'), text: 'Even increasing admission prices cannot dissuade the multitudes from making the pilgrimage to Agra and India’s crown jewel, a feat of design that marries Hindu, Islamic, Asian, and Persian architecture and possesses an even greater backstory.'},
    {surprise: 'The Great Wall of China', destination: 'China', image: require('../assets/WallChina.jpg'), text: 'The world’s largest man-made structure, a mighty fortification built to protect a kingdom and a bucket list destination for travelers across the globe, has survived for over 2,000 years, but its legacy may be nearing an end.'},
    {surprise: 'The Congo Basin, Africa', destination: 'Africa', image: require('../assets/CongoAfrica.jpg'), text: 'Rain forests produce a large chunk of the world’s supply of oxygen. As they shrink, less carbon dioxide is absorbed, adding to climate change.'},
    {surprise: 'The Dead Sea, Israel', destination: 'Israel', image: require('../assets/DeadIsrael.jpg'), text: 'Time is running out for this hyper saline lake, the saltiest spot on Earth, and a swimmer’s favorite thanks to its natural buoyancy.'},
    {surprise: 'Mount Kilimanjaro, Africa', destination: 'Africa', image: require('../assets/KilimanjaroAfrica.jpg'), text: 'Whether by human pollution or the Earth’s natural cycle, global warming is real, and it’s been happening longer than we thought.'},
    {surprise: 'Madagascar, Africa', destination: 'Africa', image: require('../assets/MadaAfrica.jpg'), text: 'The DreamWorks smash hit put this massive island off Africa’s east coast on the map, but your chances of encountering its adorable, endemic lemurs in the wild are waning (and this is the only place where you can do that).'}
];

export default locations;
