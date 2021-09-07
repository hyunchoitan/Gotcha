import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    :not(:last-child) {
        margin-bottom: 50px;
    }
`

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 25px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap:25px;

`

const Section = ({title, children}) =>(
    <Container>
        <Title>
            {title}
        </Title>
        <Grid>
            {children}
        </Grid>
    </Container>
)

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section;