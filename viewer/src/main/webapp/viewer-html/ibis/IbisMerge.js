/*
 * Copyright (C) 2015 B3Partners B.V.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Merge component with workflow support for Ibis.
 * 
 * @author markprins@b3partners.nl
 */
Ext.define("viewer.components.IbisMerge", {
    extend: "viewer.components.Merge",
    /** (cached) workflow status. */
    status: null,
    config: {
        // custom url
        actionbeanUrl: "/viewer/action/feature/ibismerge",
        // status altijd nieuw
        workflowstatus: "nieuw"
    },
    constructor: function (conf) {
        viewer.components.IbisMerge.superclass.constructor.call(this, conf);

        var store = Ext.data.StoreManager.lookup('IbisWorkflowStore');
        this.status = store.getById(this.config.workflowstatus);

        // update custom url, global var contextPath is not available until after page load
        this.config.actionbeanUrl = contextPath + "/action/feature/ibismerge";
        return this;
    },
    /**
     * add a workflow_status
     * @override
     */
    getExtraData: function () {
        // return 'workflow_status=' + this.status.getId();
        return 'workflow_status=' + this.status.get("desc");
    },
    /**
     * Return the name of the superclass to inherit the css property.
     * @returns {String} base class name
     * @override
     */
    getBaseClass: function () {
        return this.superclass.self.getName().replace(/\./g, '');
    }
});