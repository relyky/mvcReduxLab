import React from 'react'
import PropTypes from 'prop-types'
import { Table, FormGroup, Button } from 'reactstrap'

/// 船舶明細
const DataInfoView2 = ({ dataInfo }) => (
    <Table bordered hover>
        <tbody>
            <tr>
                <th className="table-active" style={{ width: '50%' }}>電臺呼號</th>
                <td>9LU2822</td>
            </tr>
            <tr>
                <th className="table-active">中文船名</th>
                <td>閩龍298</td>
            </tr>
            <tr>
                <th className="table-active">英文船名</th>
                <td>MINLON 298</td>
            </tr>
            <tr>
                <th className="table-active">船舶國籍</th>
                <td>SL．獅子山</td>
            </tr>
            <tr>
                <th className="table-active">船籍港</th>
                <td>無</td>
            </tr>
            <tr>
                <th className="table-active">淨噸位</th>
                <td>279</td>
            </tr>
            <tr>
                <th className="table-active">法長(LBP)(M)</th>
                <td>48</td>
            </tr>
            <tr>
                <th className="table-active">船寬</th>
                <td>8.8</td>
            </tr>
            <tr>
                <th className="table-active">TUE貨櫃量</th>
                <td>無</td>
            </tr>
            <tr>
                <th className="table-active">滿載平均吃水</th>
                <td>3.6</td>
            </tr>
            <tr>
                <th className="table-active">救生設備可供使用人數</th>
                <td>6</td>
            </tr>
            <tr>
                <th className="table-active">船舶號數</th>
                <td>V17094</td>
            </tr>
            <tr>
                <th className="table-active">IMO號碼</th>
                <td>8532372</td>
            </tr>
            <tr>
                <th className="table-active">MMSI號碼</th>
                <td>667001244</td>
            </tr>
            <tr>
                <th className="table-active">船舶種類</th>
                <td>B41．雜貨船</td>
            </tr>
            <tr>
                <th className="table-active">總噸位</th>
                <td>499</td>
            </tr>
            <tr>
                <th className="table-active">總長度(LOA)</th>
                <td>無</td>
            </tr>
            <tr>
                <th className="table-active">船深</th>
                <td>4.15</td>
            </tr>
            <tr>
                <th className="table-active">載重噸</th>
                <td>無</td>
            </tr>
            <tr>
                <th className="table-active">空船平均吃水</th>
                <td>3</td>
            </tr>
            <tr>
                <th className="table-active">可搭載旅客數</th>
                <td>0</td>
            </tr>
            <tr>
                <th className="table-active">單雙船殼</th>
                <td>非油輪</td>
            </tr>
        </tbody>
    </Table>
)

export default DataInfoView2;
