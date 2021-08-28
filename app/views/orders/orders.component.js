'use strict'

angular.module('orderModule', [])
    .component('orderComponent', {

        templateUrl: '/app/views/orders/orders.html',

        controller: function ($scope) {
            // attributes
           

            $scope.orderList = [
                { orderID: 1, orderDate: '2021-AUG-28', customerName: 'Kumara', amount: 513000 },
                { orderID: 2, orderDate: '2021-AUG-28', customerName: 'Sasanka', amount: 25000 },
                { orderID: 3, orderDate: '2021-AUG-21', customerName: 'Amal', amount: 35600 },
                { orderID: 4, orderDate: '2021-AUG-22', customerName: 'Nimal', amount: 86253 },
                { orderID: 5, orderDate: '2021-AUG-23', customerName: 'Geeth', amount: 45000 },
                { orderID: 6, orderDate: '2021-AUG-24', customerName: 'Asanka', amount: 150000 },
                { orderID: 7, orderDate: '2021-AUG-25', customerName: 'Dinesh', amount: 12000 },
                { orderID: 8, orderDate: '2021-AUG-26', customerName: 'Sanjeewa', amount: 23563 }
            ]


            console.log("Order Controller is working..");

        }

    });