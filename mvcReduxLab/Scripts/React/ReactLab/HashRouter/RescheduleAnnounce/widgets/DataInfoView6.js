import React from 'react'
import PropTypes from 'prop-types'
import { Table, FormGroup, Button } from 'reactstrap'

/// 實際出港
const DataInfoView6 = ({ dataInfo }) => (
    <Table bordered hover>
        <tbody>
            <tr>
                <th className="table-active">簽證編號</th>
                <td>ATXG108001726</td>
            </tr>
            <tr>
                <th className="table-active">實際離港日期</th>
                <td>無</td>
            </tr>
            <tr>
                <th className="table-active">解纜日期</th>
                <td>無</td>
            </tr>
            <tr>
                <th className="table-active">離泊碼頭</th>
                <td>無</td>
            </tr>
        </tbody>
    </Table>
)

export default DataInfoView6;
