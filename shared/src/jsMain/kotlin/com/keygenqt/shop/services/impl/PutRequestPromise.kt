/*
 * Copyright 2022 Vitaliy Zarubin
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.keygenqt.shop.services.impl

import com.keygenqt.shop.data.requests.AdminUpdateRequest
import com.keygenqt.shop.data.requests.CategoryRequest
import com.keygenqt.shop.data.requests.MessageRequest
import com.keygenqt.shop.data.requests.ProductRequest
import com.keygenqt.shop.platform.wrapPromise
import com.keygenqt.shop.services.ServiceRequest

@JsExport
@Suppress("unused", "NON_EXPORTABLE_TYPE")
class PutRequestPromise(private val client: ServiceRequest) {
    /**
     * Override [PutRequest.message] for JS
     */
    fun message(
        id: Int,
        request: MessageRequest
    ) = wrapPromise {
        client.put.message(id, request)
    }

    /**
     * Override [PutRequest.category] for JS
     */
    fun category(
        id: Int,
        request: CategoryRequest
    ) = wrapPromise {
        client.put.category(id, request)
    }

    /**
     * Override [PutRequest.product] for JS
     */
    fun product(
        id: Int,
        request: ProductRequest
    ) = wrapPromise {
        client.put.product(id, request)
    }

    /**
     * Override [PutRequest.admin] for JS
     */
    fun admin(
        id: Int,
        request: AdminUpdateRequest
    ) = wrapPromise {
        client.put.admin(id, request)
    }
}
