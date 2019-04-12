import React from 'react'
import PropTypes from 'prop-types'
import { Table, FormGroup, Button } from 'reactstrap'

const nowDate = new Date()
const getNowDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
                                        nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate()

/// 動態總覽
const DataInfoView1 = ({ dataInfo }) => (
    <Table bordered hover>
        <tbody>
            <tr>
                <th className="table-active mb-0">航班狀態</th>
                <td><span>準點</span></td>
            </tr>
            <tr>
                <th className="table-active mb-0">出發港口</th>
                <td>福建福州</td>
            </tr>
            <tr>
                <th className="table-active mb-0">開航時間</th>
                <td><span>{"2019/04/02 14:30"}</span></td>
            </tr>
            <tr>
                <th className="table-active mb-0">目的港口</th>
                <td>台北港</td>
            </tr>
            <tr>
                <th className="table-active mb-0">抵達時間</th>
                <td>{"2019/04/02 17:30"}</td>
            </tr>
            <tr>
                <th className="table-active mb-0">行經港口</th>
                <td>請參閱航線時刻表</td>
            </tr>
            <tr>
                <th className="table-active mb-0">營運公司</th>
                <td>東聯航運股份有限公司 </td>
            </tr>
            <tr>
                <th className="table-active mb-0">聯絡方式</th>
                <td>02-25046111</td>
            </tr>
        </tbody>
    </Table>
)

export default DataInfoView1;
