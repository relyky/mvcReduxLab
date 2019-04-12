import React from 'react'
import PropTypes from 'prop-types'
import { Table, FormGroup, Button } from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'


/// 船舶明細
const DataInfoView2 = ({ dataInfo }) => (
    <div>
        <ListGroup>
            <ListGroupItem className="px-0">
                <Row noGutters>
                    {/*<Col xs={1} className="my-auto text-center"></Col>*/}
                    <Col xs={4} className="mb-0">行經港口</Col>
                    <Col xs={4} className="mb-0">實際抵達時間</Col>
                    <Col xs={4} className="mb-0">實際開航時間</Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
        {dataInfo.itemList.map((item, index) =>
            <ListGroupItem key={index} className="px-0" >
                <Row noGutters>
                    <Col xs={4} className="mb-0" >{item.value1}</Col>
                    <Col xs={4} className="mb-0">{item.value2}</Col>
                    <Col xs={4} className="mb-0">{item.value3}</Col>
                </Row>
                <Row noGutters>
                    <Col xd={12}>
                        {item.value4 === '準點' && <span className="lead font-weight-bold text-primary">準點</span>}
                        {item.value4 !== '準點' && <span className="lead font-weight-bold text-danger">誤點</span>}
                    </Col>
                </Row>
            </ListGroupItem>
        )}
    </div>
)

export default DataInfoView2;
