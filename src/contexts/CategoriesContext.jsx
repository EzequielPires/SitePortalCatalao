import { createContext, useState } from "react";
import { fetcher } from "../Helper/fetch-wrapper";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [category, setCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const [primary, setPrimary] = useState(null);
    const [dark, setDark] = useState(null);

    function handleColor(color) {
        setPrimary(color);
        setDark("#00000070");
        if (color === "var(--primary)") {
            setDark("var(--blue-light)");
        }
    }
    function handleCategories(category) {
        setCategories(category);
    }
    function isPrimary(categories, primary) {
        categories.every(category => {
            if (category.id_string === primary) {
                handleColor(category.color);
                setCategory(category);
                return false;
            }
            if (category.children) {
                isPrimary(category.children, primary);
            }
            return true;
        });
        return category;
    }
    async function getPrimary(primary) {
        if (categories.length === 0) {
            let newCategory = await fetcher('category/tree');
            setCategories(newCategory);
            isPrimary(newCategory, primary);
        } else {
            isPrimary(categories, primary);
        }
    }
    const getCategories = async () => {
        if (categories.length === 0) {
            let newCategory = await fetcher('category/tree');
            setCategories(newCategory);
        }
    }
    const functionName = (array, name) => {
        let nameCategory = null;
        array.forEach(category => {
            if(category.id_string === name) {
                setCategory(category);
                nameCategory = category.name;  
            }
            category.children && !nameCategory ? nameCategory = functionName(category.children, name) : null;
        });
        return nameCategory;
    }
    const getCategoryName = async (name) => {
        var nameCategory = '';
        if(categories && categories.length > 0) {
            nameCategory = functionName(categories, name);
        } else {
            let newCategories = await fetcher('category/tree');
            nameCategory = functionName(newCategories, name);
        }
        return nameCategory;
    }

    return (
        <CategoriesContext.Provider value={{
            primary,
            dark,
            handleColor,
            categories,
            category,
            handleCategories,
            getPrimary,
            getCategoryName,
            getCategories
        }}>
            {children}
        </CategoriesContext.Provider>
    );
}