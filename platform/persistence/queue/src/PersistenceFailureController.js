/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2021, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2021, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

import moment from 'moment';

import Constants from './PersistenceFailureConstants';

/**
 * Controller to support the template to be shown in the
 * dialog shown for persistence failures.
 * @constructor
 * @memberof platform/persistence/queue
 */
function PersistenceFailureController() {
}

/**
 * Format a timestamp for display in the dialog.
 * @memberof platform/persistence/queue.PersistenceFailureController#
 */
PersistenceFailureController.prototype.formatTimestamp = function (timestamp) {
    return moment.utc(timestamp)
        .format(Constants.TIMESTAMP_FORMAT);
};

/**
 * Format a user name for display in the dialog.
 * @memberof platform/persistence/queue.PersistenceFailureController#
 */
PersistenceFailureController.prototype.formatUsername = function (username) {
    return username || Constants.UNKNOWN_USER;
};

export default PersistenceFailureController;