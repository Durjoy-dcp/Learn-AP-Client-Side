import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container my-5'>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header  >what is cors?</Accordion.Header>
                    <Accordion.Body>
                        The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you.

                        Therefore, implementing Firebase means plugging a ready-made backend into your client code to make it dynamic. Ultimately, it eliminates the need to write backend code from scratch and gives you a fully functional one instead.

                        The best Firebase alternatives
                        <ul className='text-start'>
                            <li>Kuzzle</li>
                            <li>Pubnub</li>
                            <li>Backendless</li>
                            <li>Deployd</li>
                        </ul>

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        Private route work as the wall to go inside any component .If someone logged in only then he will redirects to the page where he wants to go .But without Login or users cannot access those routes .


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is node and how it works?</Accordion.Header>
                    <Accordion.Body> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;