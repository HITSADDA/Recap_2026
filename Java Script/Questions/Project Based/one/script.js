const images = [
    {
        category: 'birds',
        src: 'https://plus.unsplash.com/premium_photo-1675714692342-01dfd2e6b6b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        category: 'mammals', // Fixed spelling
        src: 'https://images.unsplash.com/photo-1463852247062-1bbca38f7805?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        category: 'reptiles', // Fixed spelling
        src: 'https://images.unsplash.com/photo-1777062573331-76eff62d46b4?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        category: 'birds',
        src: 'https://plus.unsplash.com/premium_photo-1675714692342-01dfd2e6b6b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        category: 'mammals',
        src: 'https://images.unsplash.com/photo-1463852247062-1bbca38f7805?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        category: 'reptiles',
        src: 'https://images.unsplash.com/photo-1777062573331-76eff62d46b4?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        category: 'birds',
        src: 'https://plus.unsplash.com/premium_photo-1675714692342-01dfd2e6b6b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        category: 'mammals',
        src: 'https://images.unsplash.com/photo-1463852247062-1bbca38f7805?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        category: 'reptiles',
        src: 'https://images.unsplash.com/photo-1777062573331-76eff62d46b4?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
];



const grid = document.getElementById('grid')
const cat = document.getElementById('cats')
let current = 'all'


function list_images(images, cat = "") {
    grid.innerHTML = '';
    for (let image of images) {
        if (cat === 'all' || image.category === cat) {
            const child = document.createElement('img');
            child.src = image.src;
            child.classList.add(image.category);
            grid.appendChild(child);
        }
    }
}

list_images(images, current)

const handleAddElements = (e) => {
    const targetId = e.target.id.toLowerCase();
    if (['all', 'birds', 'mammals', 'reptiles'].includes(targetId)){
        if (current !== targetId) {
            current = targetId;
            list_images(images, current);
        }
    }
}

cat.addEventListener('click', handleAddElements)


// 4:19:50