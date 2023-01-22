import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Bootstrap.css";
import { useState } from 'react';
import { useEffect } from 'react';


const Bootstrap = () => {
    let [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then( res => res.json())
        .then( data => setPosts(data))
        .catch( (err) => console.log(err))
    },[]);
    return (
        <>
        <Container>
            <Row>
              {
                posts.map( (post) => {
                    return(
                        <Col md={4} key={post.id}>
                         <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                        {post.body}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                      </Card>
                        
                        </Col>
                        
                    );
                })
              }


            </Row>
        </Container>
        </>
    );
};

export default Bootstrap;