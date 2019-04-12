import React from 'react'
import PropTypes from 'prop-types'
import { Table, FormGroup, Button } from 'reactstrap'

/// 實際進港
const DataInfoView4 = ({ dataInfo }) => (
    <Table bordered hover>
        <tbody>
            <tr>
                <th className="table-active">簽證編號</th>
                <td>ATXG108001726</td>
            </tr>
            <tr>
                <th className="table-active">船舶號數</th>
                <td>V17094</td>
            </tr>
            <tr>
                <th className="table-active">實際進港時間</th>
                <td>2019/03/20 07:09</td>
            </tr>
            <tr>
                <th className="table-active">繫纜時間</th>
                <td>2019/03/20 07:20</td>
            </tr>
            <tr>
                <th className="table-active">靠泊碼頭</th>
                <td>臺中港09碼頭</td>
            </tr>
            <tr>
                <th className="table-active">結案時間</th>
                <td>無</td>
            </tr>
            <tr>
                <th className="table-active">進港港口</th>
                <td>臺中港</td>
            </tr>
            <tr>
                <th className="table-active">結案原因</th>
                <td>無</td>
            </tr>
        </tbody>
    </Table>
)

export default DataInfoView4;
