import React from 'react'
import PropTypes from 'prop-types'
import { Table, FormGroup, Button } from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

/// 航線時刻表
const DataInfoView2 = ({ dataInfo }) => (
    <div>
        <ListGroup>
            <ListGroupItem>
                <Row noGutters>
                    <Col xs={4} >行經港口</Col>
                    <Col xs={4} >實際抵達時間</Col>
                    <Col xs={4} >實際開航時間</Col>
                </Row>
            </ListGroupItem>
            {dataInfo.itemList.map((item, index) =>
                <ListGroupItem key={index}>
                    <Row noGutters>
                        <Col xs={4} >{item.value1}</Col>
                        <Col xs={4} >{item.value2}</Col>
                        <Col xs={4} >{item.value3}</Col>
                        <Col xd={12}>
                            {item.value4 === '準點' && <span className="lead font-weight-bold text-primary">準點</span>}
                            {item.value4 !== '準點' && <span className="lead font-weight-bold text-danger">誤點</span>}
                        </Col>
                    </Row>
                </ListGroupItem>
            )}
        </ListGroup>
    </div>
)

export default DataInfoView2;
