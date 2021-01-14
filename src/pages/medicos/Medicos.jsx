import React from 'react';
import {Table } from 'react-bootstrap';
import Menu from '../../components/Menu';

export default () => {
    return (
        <>
            <Menu title="Medicos">
                <Table className="table" variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>CRM</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>1111111</td>
                            <td>(61)9999-9999</td>
                        </tr>
                    </tbody>
                </Table>
            </Menu>
        </>
    )
}