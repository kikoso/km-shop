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
package com.keygenqt.shop.db.entities

import com.keygenqt.shop.data.responses.OrderResponse
import com.keygenqt.shop.data.responses.OrderState
import com.keygenqt.shop.extension.toUTC
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Table

/**
 * Table user orders
 */
object Orders : IntIdTable() {
    val email = varchar("email", 255)
    val phone = varchar("phone", 255)
    val state = enumeration("state", OrderState::class).default(OrderState.NEW)
    val createAt = long("createAt")
    val updateAt = long("updateAt")
}

/**
 * References table
 */
object OrderProducts : Table() {
    val order = reference("order", Orders)
    val product = reference("product", Products)
    val price = double("price")
    val count = integer("count")
    override val primaryKey = PrimaryKey(order, product, name = "PK_orderProducts_p_u")
}

/**
 * Exposed entity
 */
class OrderEntity(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<OrderEntity>(Orders)

    var email by Orders.email
    var phone by Orders.phone
    var state by Orders.state
    var createAt by Orders.createAt
    var updateAt by Orders.updateAt

    var products by ProductEntity via OrderProducts
}

/**
 * Convert to [OrderResponse]
 */
fun OrderEntity.toModel() = OrderResponse(
    id = id.value,
    email = email,
    phone = phone,
    state = state,
    createAt = createAt.toUTC(),
    updateAt = updateAt.toUTC(),
)

/**
 * Convert to [List]
 */
fun Iterable<OrderEntity>.toModels(): List<OrderResponse> {
    return map { it.toModel() }
}
