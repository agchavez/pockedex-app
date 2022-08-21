import { Pockemon } from '../interfaces/pockedex-response';
const toggleFavorite = (pockemon: Pockemon | undefined) => {
  if (pockemon) {
    let favorites: Pockemon[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favoriteIndex = favorites.findIndex((pokemon) => pokemon._id === pockemon._id);
    if (favoriteIndex === -1) {
        favorites.push(pockemon);
        }
    else {
        favorites.splice(favoriteIndex, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    }

};


const existsFavorite = (id: string | undefined): boolean => {
    if (id && typeof window !== 'undefined'){
        const favorites: Pockemon[] = JSON.parse(localStorage.getItem('favorites') || '[]');
        return favorites.findIndex((pokemon) => pokemon._id === id) !== -1;
    }
    return false;
}



const setFavorites = (): Pockemon[] => {
    const favorites: Pockemon[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites;
}
export {
    toggleFavorite,
    existsFavorite,
    setFavorites
};
