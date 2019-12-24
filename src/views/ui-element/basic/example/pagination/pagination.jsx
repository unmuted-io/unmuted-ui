// import external modules
import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

class Paginations extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Pagination</h5>
        </CardHeader>
        <CardBody>
          <Pagination>
            <PaginationItem>
              <PaginationLink href="#">Previous</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">Next</PaginationLink>
            </PaginationItem>
          </Pagination>
          <h5 className="mt-5">Working with Icons</h5>
          <hr />
          <Pagination>
            <PaginationItem>
              <PaginationLink href="#">
                <span>&laquo;</span>
                <span className="sr-only">Previous</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                <span>&raquo;</span>
                <span className="sr-only">Next</span>
              </PaginationLink>
            </PaginationItem>
          </Pagination>
          <h5 className="mt-5">Disabled and Active States</h5>
          <hr />
          <Pagination>
            <PaginationItem disabled>
              <PaginationLink href="#">Previous</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">Next</PaginationLink>
            </PaginationItem>
          </Pagination>
          <h5 className="mt-5">Sizing</h5>
          <hr />
          <Pagination size="lg" className="mb-4">
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
          </Pagination>
          <Pagination size="sm">
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
          </Pagination>
          <h5 className="mt-5">Alignment</h5>
          <hr />
          <Pagination listClassName="justify-content-center">
            <PaginationItem>
              <PaginationLink href="#">Previous</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">Next</PaginationLink>
            </PaginationItem>
          </Pagination>
          <Pagination listClassName="justify-content-end">
            <PaginationItem>
              <PaginationLink href="#">Previous</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">Next</PaginationLink>
            </PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    );
  }
}

export default Paginations;
