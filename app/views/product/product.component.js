
'use strict'

angular.module('productModule', [])
    .component('productList', {

        template: `
<div>
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    <span style="font-weight: bolder;">Using $scope & Directive  product-list</span>
                </div>

                <p style="color: darkorchid;">Product ID :{{ ' '+ productId}}</p>
                <p style="color: darkorchid;">Product Name :{{productName}}</p>
                <p style="color: darkorchid;">Product QTY :{{ qty}}</p>
                <p style="color: darkorchid;">Product Unit Price :{{ unitPrice | currency: 'RS ' : 2 }}
                </p>


            </div>
        </div>

   
</div>`,

        controller: function ($scope) {
            // attributes
            $scope.productId = 1;
            $scope.productName = "Yamaha FZ V.2";
            $scope.qty = 45;
            $scope.unitPrice = "513000";


            console.log("Product Controller is working..");

        }

    });