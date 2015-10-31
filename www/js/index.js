/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
init: function() {
    document.addEventListener("deviceready", this.onDeviceReady, false);
    },

    onDeviceReady: function(){
       // DO STUFF
       // ....

       // ENABLE PUSH
       this.push_init();
    },

    push_init: function(){
        app.SENDER_ID = 1057793344396; // replaced by my actual GCM project no

        var pushNotification = window.plugins.pushNotification;

        pushNotification.register( 
            function(){alert('Push: win');}, // never called
            function(){alert('Push: Error');},  // never called
            { senderID: app.SENDER_ID, ecb: "app.push_android" }
        );
    },
   // never called
   push_android: function(e){
       alert('connection established...');
   console.log( 'successfully started android' );
   console.log( e );
   }

};

app.init();