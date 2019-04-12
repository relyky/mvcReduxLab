import React from 'react'
import PropTypes from 'prop-types'
import { Table, FormGroup, Button } from 'reactstrap'

/// 動態總覽
const DataInfoView1 = ({ dataInfo }) => (
    <Table bordered hover>
        <tbody>
            <tr>
                <th className="table-active">預定進港</th>
                <td><span className="text-danger">2019/03/20 08:00</span></td>
            </tr>
            <tr>
                <th className="table-active">實際進港</th>
                <td>2019/03/20 07:09</td>
            </tr>
            <tr>
                <th className="table-active">預定出港</th>
                <td><span className="text-danger">2019/03/20 09:00</span></td>
            </tr>
            <tr>
                <th className="table-active">實際出港</th>
                <td>無</td>
            </tr>
            <tr>
                <th className="table-active">船舶種類</th>
                <td>B41．雜貨船</td>
            </tr>
            <tr>
                <th className="table-active">靠泊碼頭</th>
                <td>台中港04A碼頭</td>
            </tr>
        </tbody>
    </Table>
)

export default DataInfoView1;
