import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useContext, useEffect } from 'react';

export default function SignInForm() {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder='enter username' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='enter password' />
            </Form.Group>
            <Button variant="primary" type="submit">Sign In</Button>

        </Form>
    )
}