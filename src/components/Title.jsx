import Container from "./UI/Container";

const Title = (props) => {
    return(
        <Container>
            <h1 style={{color: "#e2e4dd",
            letterSpacing: "1rem",
            textAlign: "center"}}>{props.title}</h1>
            <div style={{margin: "0 auto",
            marginTop: "0.2rem",
            height: "0.1rem",
            width: "50vw",
            backgroundcolor: "#e2e4dd",
            alignItems: "center"}}></div>
        </Container>
    );
};

export default Title;