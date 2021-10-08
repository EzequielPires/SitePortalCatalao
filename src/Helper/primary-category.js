export const category = {
    getPrimary 
}

function getPrimary(categories, primary) {
    let primaryCategory = null;
    categories.every(category => {
        if(category.id === primary) {
            primaryCategory = category;
            return false;
        }
        return true;
    });
    return primaryCategory;
}