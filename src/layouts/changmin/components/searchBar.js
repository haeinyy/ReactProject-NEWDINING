import React, { Component, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaSearch } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import DietEdit from "./DietEdit";
import Diet from "./Diet";
import { useSelector, useDispatch } from "react-redux";
import { calculate } from "../redux/menu";

function Index(props) {
    const dispatch = useDispatch();
    const { data, setData } = useFetch();
    const menus = useSelector((state) => state.menu.value);
    const carbonate = useSelector((state) => state.menu.carbonate);
    const protein = useSelector((state) => state.menu.protein);
    const fat = useSelector((state) => state.menu.fat);
    const main = useSelector((state) => state.menu.main);
    const desert = useSelector((state) => state.menu.desert);
    console.log("redux menus:", menus);
    console.log("raw data: ", data.results);
    useEffect(() => {
        dispatch(calculate());
    }, [menus]);
    return (
        <>
            <PlaceholderStack>
                <Placeholder
                    placeholder="   메뉴를 검색해주세요"
                    onChange={(e) => setData({ ...data, slug: e.target.value })}
                ></Placeholder>
                <FaSearch
                    name="magnifying-glass"
                    style={{
                        top: 5,
                        left: 260,
                        position: "absolute",
                        color: "rgba(215,12,25,1)",
                        fontSize: 36,
                    }}
                ></FaSearch>
            </PlaceholderStack>
            <SearchResult>
                {/* {data.results.length > 0 ? (
                    // <House family={data.results[0]} />
                    <Diet family={data.results[0]} />
                ) : null} */}
                <Diet menu={data.results} />
                <DietEdit />
            </SearchResult>
            <div>칼로리 정보</div>
            <div>탄수화물 : {carbonate}</div>
            <div>단백질 : {protein}</div>
            <div>지방 : {fat}</div>
            <div>main: {main[0]}</div>
            <div>desert: {desert[0]}</div>
        </>
    );
}

const Placeholder = styled.input`
    font-family: Roboto;
    top: 0px;
    /* position: absolute; */
    font-style: normal;
    font-weight: 400;
    color: #121212;
    height: 49px;
    width: 308px;
    border-width: 1px;
    border-color: rgba(215, 12, 25, 0.3);
    border-radius: 8px;
    text-align: left;
    letter-spacing: 0px;
    left: 0px;
    border-style: solid;
    background: transparent;
`;

const PlaceholderStack = styled.div`
    background-color: white;
    margin: 10px auto;
    width: 308px;
    height: 49px;
    position: relative;
    display: flex;
    justify-content: center;
`;
const SearchResult = styled.div`
    display: flex;
`;

export default Index;
