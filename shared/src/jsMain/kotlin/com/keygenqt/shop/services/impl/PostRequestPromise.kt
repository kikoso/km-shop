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

import com.keygenqt.shop.platform.wrapPromise
import com.keygenqt.shop.services.ServiceRequest

@JsExport
@Suppress("unused", "NON_EXPORTABLE_TYPE")
class PostRequestPromise(private val client: ServiceRequest) {

    /**
     * Override [PostRequest.login] for JS
     */
    fun login(
        email: String,
        password: String,
    ) = wrapPromise {
        client.post.login(
            email = email,
            password = password,
        )
    }

    /**
     * Override [PostRequest.adminCreate] for JS
     */
    fun adminCreate(
        email: String,
        role: String,
        password: String,
    ) = wrapPromise {
        client.post.adminCreate(
            email = email,
            role = role,
            password = password,
        )
    }
}