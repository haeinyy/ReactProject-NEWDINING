import React, { Component } from "react";
import styled, { css } from "styled-components";
import { FaSearch } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import House from "./House";
import DietEdit from "./DietEdit";
import Diet from "./Diet";
import { useSelector } from "react-redux";

function Index(props) {
    const { data, setData } = useFetch();
    const menus = useSelector((state) => state.menu.value);
    console.log("redux menus:", menus);

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
                <Diet family={data.results[0]} />
                <DietEdit />
            </SearchResult>
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
