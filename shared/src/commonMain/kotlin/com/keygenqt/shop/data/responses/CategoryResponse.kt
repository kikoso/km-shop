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
package com.keygenqt.shop.data.responses

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Response categories products
 */
@JsExport
@Serializable
data class CategoryResponse(
    val id: Int,
    val name: String,
    val image: String,
    val isPublished: Boolean,
    val createAt: String,
    val updateAt: String,
    val products: Array<ProductResponse>? = null,
    val uploads: Array<UploadResponse>? = null,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as CategoryResponse

        if (id != other.id) return false
        if (name != other.name) return false
        if (image != other.image) return false
        if (isPublished != other.isPublished) return false
        if (createAt != other.createAt) return false
        if (updateAt != other.updateAt) return false
        if (!products.contentEquals(other.products)) return false
        if (!uploads.contentEquals(other.uploads)) return false

        return true
    }

    override fun hashCode(): Int {
        var result = id
        result = 31 * result + name.hashCode()
        result = 31 * result + image.hashCode()
        result = 31 * result + isPublished.hashCode()
        result = 31 * result + createAt.hashCode()
        result = 31 * result + updateAt.hashCode()
        result = 31 * result + products.contentHashCode()
        result = 31 * result + uploads.contentHashCode()
        return result
    }
}