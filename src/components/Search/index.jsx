import { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

import useFocus from '../../hooks/useFocus';
import { Social } from '../Social';

import { GoSearch } from 'react-icons/go';
import { CategoriesContext } from '../../contexts/CategoriesContext';

import styles from "./styles.module.scss";
import { useRouter } from 'next/router';

export default function Search() {
    const [value, setValue] = useState('');
    const [search, setSearch] = useState(false);
    const wrapperRef = useRef(null);
    const [inputRef, setInputRef] = useFocus();
    const { dark, primary } = useContext(CategoriesContext);
    const router = useRouter();

    useEffect(() => {
        search ? document.addEventListener("mousedown", handleOnBlur) : null;
    })

    function handleOnBlur(e) {
        !wrapperRef.current.contains(e.target) ? handleSearch() : null;
    }
    function handleSearch(e) {
        const toggle = () => {
            setSearch(true);
            setInputRef();
        }
        search ? setSearch(false) : toggle();
    }
    function handleChange(e) {
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        let str = value.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
        let remove_espaco = str.replace(/ /g, '+').toLowerCase();
        router.push(`/noticias/search?s=${remove_espaco}`);
    }

    return (
        <div className={styles.search + " search d-flex align-items-center"} ref={wrapperRef}>
            <div className={styles.input}>
                <Form onSubmit={handleSubmit} action="search">
                    <fieldset
                        className={
                            search ? styles.search + " d-flex align-items-center"
                                : styles.searchDisable
                        }
                    >
                        <FormControl
                            className={styles.inputSearch}
                            id="inputSearch"
                            type="search"
                            name="s"
                            value={value}
                            onChange={handleChange}
                            required
                            placeholder="Busque"
                            ref={inputRef}
                        />
                        <button
                            type="submit"
                            className="d-flex align-items-center justify-content-center h-100"
                            style={{ backgroundColor: `${primary}` }}
                        >
                            <GoSearch />
                        </button>
                    </fieldset>
                </Form>
            </div>
            <div className="d-flex align-items-center">
                <Social />
                <div className="icon">
                    <button
                        className={styles.btnSearch}
                        onClick={handleSearch}
                        style={{ backgroundColor: `${dark}` }}
                    >
                        <GoSearch />
                    </button>
                </div>
            </div>
        </div>
    );
}