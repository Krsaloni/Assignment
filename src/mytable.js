import React from 'react'
import PropTypes from 'prop-types'
import './style.css';

function mytable(props) {
    return (
        <div class="container" >
            <table class="table , mytablecss">
                <tr class="firstrow">
                    <td>John</td>
                    <td>
                        <th>aaa</th>
                        <tr>aaa</tr>
                    </td>
                    <td>
                        <th>aaa</th>
                        <tr>aaa</tr>
                    </td>
                    <td>
                        <th>aaa</th>
                        <tr>aaa</tr>
                    </td>
                    <td><button>sdsadsadsa</button></td>
                </tr>
                <tr class="secondrow">
                    <td>John</td>
                    <td>
                        <th>aaa</th>
                        <tr>aaa</tr>
                    </td>
                    <td>
                        <th>aaa</th>
                        <tr>aaa</tr>
                    </td>
                    <td>
                        <th>aaa</th>
                        <tr>aaa</tr>
                    </td>
                    <td><button>sdsadsadsa</button></td>
                </tr>
                <tr class="thirdrow">
                    <td>Mary</td>
                    <td>
                        <th>aaa</th>
                        <tr>aaa</tr>
                    </td>
                    <td>
                        <th>aaa</th>
                        <tr>aaa</tr>
                    </td>
                    <td>
                        <th>aaa</th>
                        <tr>aaa</tr>
                    </td>
                    <td><button>sdsadsadsa</button></td>
                </tr>

            </table>
        </div>
    )
}

mytable.propTypes = {}

export default mytable
