const cmdb_en = {
    relation: 'Relation',
    attribute: 'Attributes',
    configTable: 'Config Table',
    menu: {
        views: 'Views',
        config: 'Configuration',
        backend: 'Management',
        ciTable: 'Resource Views',
        ciTree: 'Tree Views',
        ciSearch: 'Search',
        adCIs: 'AutoDiscovery Pool',
        preference: 'Preference',
        batchUpload: 'Batch Import',
        citypeManage: 'Modeling',
        backendManage: 'Backend',
        customDashboard: 'Custom Dashboard',
        serviceTreeDefine: 'Service Tree',
        citypeRelation: 'CIType Relation',
        operationHistory: 'Operation Audit',
        relationType: 'Relation Type',
        ad: 'AutoDiscovery',
        cidetail: 'CI Detail'
    },
    ciType: {
        ciType: 'CIType',
        attributes: 'Attributes',
        relation: 'Relation',
        trigger: 'Triggers',
        attributeAD: 'Attributes AutoDiscovery',
        relationAD: 'Relation AutoDiscovery',
        grant: 'Grant',
        addGroup: 'New Group',
        editGroup: 'Edit Group',
        group: 'Group',
        attributeLibray: 'Attribute Library',
        addCITypeInGroup: 'Add a new CIType to the group',
        addCIType: 'Add CIType',
        editGroupName: 'Edit group name',
        deleteGroup: 'Delete this group',
        CITypeName: 'Name(English)',
        English: 'English',
        inputAttributeName: 'Please enter the attribute name',
        attributeNameTips: 'It cannot start with a number, it can be English numbers and underscores (_)',
        editCIType: 'Edit CIType',
        defaultSort: 'Default sort',
        selectDefaultOrderAttr: 'Select default sorting attributes',
        asec: 'Forward order',
        desc: 'Reverse order',
        uniqueKey: 'Unique Identifies',
        uniqueKeySelect: 'Please select a unique identifier',
        uniqueKeyTips: 'json/password/computed/choice can not be unique identifies',
        notfound: 'Can\'t find what you want?',
        cannotDeleteGroupTips: 'There is data under this group and cannot be deleted!',
        confirmDeleteGroup: 'Are you sure you want to delete group [{groupName}]?',
        confirmDeleteCIType: 'Are you sure you want to delete model [{typeName}]?',
        uploading: 'Uploading',
        uploadFailed: 'Upload failed, please try again later',
        addPlugin: 'New plugin',
        deletePlugin: 'Delete plugin',
        confirmDeleteADT: 'Do you confirm to delete [{pluginName}]',
        attributeMap: 'Attribute mapping',
        autoDiscovery: 'AutoDiscovery',
        node: 'Node',
        adExecConfig: 'Execute configuration',
        adExecTarget: 'Execute targets',
        oneagentIdTips: 'Please enter the hexadecimal OneAgent ID starting with 0x',
        selectFromCMDBTips: 'Select from CMDB ',
        adAutoInLib: 'Save as CI auto',
        adInterval: 'Collection frequency',
        byInterval: 'by interval',
        allNodes: 'All nodes',
        specifyNodes: 'Specify Node',
        specifyNodesTips: 'Please fill in the specify node!',
        username: 'Username',
        password: 'Password',
        link: 'Link',
        list: 'List',
        listTips: 'The value of the field is one or more, and the type of the value returned by the interface is list.',
        computeForAllCITips: 'All CI trigger computes',
        confirmcomputeForAllCITips: 'Confirm triggering computes for all CIs?',
        isUnique: 'Is it unique',
        unique: 'Unique',
        isChoice: 'Choiced',
        defaultShow: 'Default Display',
        defaultShowTips: 'The CI instance table displays this field by default',
        isSortable: 'Sortable',
        isIndex: 'Indexed',
        index: 'Index',
        indexTips: 'Fields can be used for retrieval to speed up queries',
        confirmDelete: 'Confirm to delete [{name}]?',
        confirmDelete2: 'Confirm to delete?',
        computeSuccess: 'Triggered successfully!',
        basicConfig: 'Basic Settings',
        AttributeName: 'Name(English)',
        DataType: 'Data Type',
        defaultValue: 'Default value',
        autoIncID: 'Auto-increment ID',
        customTime: 'Custom time',
        advancedSettings: 'Advanced Settings',
        font: 'Font',
        color: 'Color',
        choiceValue: 'Predefined value',
        computedAttribute: 'Computed Attribute',
        computedAttributeTips: 'The value of this attribute is calculated through an expression constructed from other attributes of the CIType or by executing a piece of code. The reference method of the attribute is: {{ attribute name }}',
        addAttribute: 'New attribute',
        existedAttributes: 'Already have attributes',
        editAttribute: 'Edit attribute',
        addAttributeTips1: 'If sorting is selected, it must also be selected!',
        uniqueConstraint: 'Unique Constraint',
        up: 'Move up',
        down: 'Move down',
        selectAttribute: 'Select Attribute',
        groupExisted: 'Group name already exists',
        attributeSortedTips: 'Attributes in other groups cannot be sorted. If you need to sort, please drag them to a custom group first!',
        buildinAttribute: 'built-in attributes',
        expr: 'Expression',
        code: 'Code',
        apply: 'apply',
        continueAdd: 'Keep adding',
        filter: 'Filter',
        choiceOther: 'Other CIType Attributes',
        choiceWebhookTips: 'The returned results are filtered by fields, and the hierarchical nesting is separated by ##, such as k1##k2. The web request returns {k1: [{k2: 1}, {k2: 2}]}, and the parsing result is [1, 2 ]',
        selectCIType: 'Please select a CMDB CIType',
        selectCITypeAttributes: 'Please select CIType attributes',
        selectAttributes: 'Please select attributes',
        choiceScriptDemo: 'class ChoiceValue(object):\n    @staticmethod\n    def values():\n        """\n        Execution entry, returns predefined value\n        :return: Returns a list, the type of the value is the same as the type of the attribute\n        For example:\n        return ["online", "offline"]\n        """\n        return []',
        valueExisted: 'The current value already exists!',
        addRelation: 'Add Relation',
        sourceCIType: 'Source CIType',
        sourceCITypeTips: 'Please select Source CIType',
        dstCIType: 'Target CIType',
        dstCITypeTips: 'Please select target CIType',
        relationType: 'Relation Type',
        relationTypeTips: 'Please select relation type',
        isParent: 'is parent',
        relationConstraint: 'Constraints',
        relationConstraintTips: 'please select a relationship constraint',
        one2Many: 'One to Many',
        one2One: 'One to One',
        many2Many: 'Many to Many',
        basicInfo: 'Basic Information',
        nameInputTips: 'Please enter name',
        triggerDataChange: 'Data changes',
        triggerDate: 'Date attribute',
        triggerEnable: 'Turn on',
        descInput: 'Please enter remarks',
        triggerCondition: 'Triggering conditions',
        addInstance: 'Add new instance',
        deleteInstance: 'Delete instance',
        changeInstance: 'Instance changes',
        selectMutipleAttributes: 'Please select attributes (multiple selections)',
        selectSingleAttribute: 'Please select an attribute (single choice)',
        beforeDays: 'ahead of time',
        days: 'Days',
        notifyAt: 'Send time',
        notify: 'Notify',
        triggerAction: 'Trigger action',
        receivers: 'Recipients',
        emailTips: 'Please enter your email address, separate multiple email addresses with ;',
        customEmail: 'Custom recipients',
        notifySubject: 'Notification title',
        notifySubjectTips: 'Please enter notification title',
        notifyContent: 'Content',
        notifyMethod: 'Notify methods',
        botSelect: 'Please select a robot',
        refAttributeTips: 'The title and content can reference the attribute value of the CIType. The reference method is: {{ attr_name }}',
        webhookRefAttributeTips: 'Request parameters can reference the attribute value of the model. The reference method is: {{ attr_name }}',
        newTrigger: 'Add trigger',
        editTriggerTitle: 'Edit trigger {name}',
        newTriggerTitle: 'Add trigger {name}',
        confirmDeleteTrigger: 'Are you sure to delete this trigger?',
        int: 'Integer',
        float: 'Float',
        text: 'Text',
        datetime: 'DateTime',
        date: 'Date',
        time: 'Time',
        json: 'JSON',
        event: 'Event',
        reg: 'Regex',
        isInherit: 'Inherit',
        inheritType: 'Inherit Type',
        inheritTypePlaceholder: 'Please select inherit types',
        inheritFrom: 'inherit from {name}',
        groupInheritFrom: 'Please go to the {name} for modification',
        downloadType: 'Download CIType',
        deleteCIType: 'Delete CIType',
        otherGroupTips: 'Non sortable within the other group',
        filterTips: 'click to show {name}'
    },
    components: {
        unselectAttributes: 'Unselected',
        selectAttributes: 'Selected',
        downloadCI: 'Export data',
        filename: 'Filename',
        filenameInputTips: 'Please enter filename',
        saveType: 'Save type',
        saveTypeTips: 'Please select save type',
        xlsx: 'Excel workbook (*.xlsx)',
        csv: 'CSV (comma separated) (*.csv)',
        html: 'Web page (*.html)',
        xml: 'XML data (*.xml)',
        txt: 'Text file (tab delimited) (*.txt)',
        grantUser: 'Grant User/Department',
        grantRole: 'Grant Role',
        confirmRevoke: 'Confirm to delete the [Authorization] permission of [{name}]?',
        readAttribute: 'View Attributes',
        readCI: 'View CIs',
        config: 'Configuration',
        ciTypeGrant: 'Grant CIType',
        ciGrant: 'Grant CI',
        attributeGrant: 'Grant Attribute',
        relationGrant: 'Grant Relation',
        perm: 'Permissions',
        all: 'All',
        customize: 'Customize',
        none: 'None',
        customizeFilterName: 'Please enter a custom filter name',
        colorPickerError: 'Initialization color format error, use #fff or rgb format',
        example: 'Example value',
        aliyun: 'aliyun',
        tencentcloud: 'Tencent Cloud',
        huaweicloud: 'Huawei Cloud',
        beforeChange: 'Before change',
        afterChange: 'After change',
        noticeContentTips: 'Please enter notification content',
        saveQuery: 'Save Filters',
        pleaseSearch: 'Please search',
        conditionFilter: 'Conditional filtering',
        attributeDesc: 'Attribute Description',
        ciSearchTips: '1. JSON/password/link attributes cannot be searched\n2. If the search content includes commas, they need to be escaped\n3. Only index attributes are searched, non-index attributes use conditional filtering',
        ciSearchTips2: 'For example: q=hostname:*0.0.0.0*',
        subCIType: 'Subscription CIType',
        already: 'already',
        not: 'not',
        sub: 'subscription',
        selectBelow: 'Please select below',
        subSuccess: 'Subscription successful',
        selectMethods: 'Please select a method',
        noAuthRequest: 'No certification requested yet',
        noParamRequest: 'No parameter certification yet',
        requestParam: 'Request parameters',
        param: 'Parameter{param}',
        value: 'Value{value}',
        clear: 'Clear',
    },
    batch: {
        downloadFailed: 'Download failed',
        unselectCIType: 'No CIType selected yet',
        pleaseUploadFile: 'Please upload files',
        batchUploadCanceled: 'Batch upload canceled',
        selectCIType: 'Select CIType',
        selectCITypeTips: 'Please select a CIType and then download',
        downloadTemplate: 'Download Template',
        clickDownload: 'Click to Download',
        drawTips: 'Click or drag files here to upload!',
        supportFileTypes: 'Supported file types: xls, xlsx',
        uploadResult: 'Upload results',
        total: 'total',
        successItems: 'items, succeeded',
        failedItems: 'items, failed',
        items: 'items',
        errorTips: 'Error message',
        requestFailedTips: 'An error occurred with the request, please try again later',
        requestSuccessTips: 'Upload completed',
        uploadFile: 'Upload File',
        drawTips1: 'Please <span class="cmdb-batch-upload-tips">select a CIType</span>, and then <span class="cmdb-batch-upload-tips">download</span> ,',
        drawTips2: '<span class="cmdb-batch-upload-tips">click or drag file</span> to upload',
        dataPreview: 'Preview data and upload',
        tips1: 'Kind Reminder :',
        tips2: '1. Click to download the template, and users can customize the header of the template file, including model properties and model associations',
        // eslint-disable-next-line no-template-curly-in-string
        tips3: '2. The red color in the template file represents the model relationship, such as the $Product. Product Name (${Model Name}. {Attribute Name}) column, which establishes the relationship with the product.',
        tips4: '3. In the download template Excel file, the predefined values of attributes will be set as dropdown options. Please note that due to the limitations of Excel itself, a single dropdown box is limited to a maximum of 255 characters. If it exceeds 255 characters, we will not set the dropdown options for this attribute',
        tips5: '4. When using Excel templates, please ensure that a single file does not exceed 5000 lines.',
    },
    preference: {
        mySub: 'My Subscription',
        sub: 'Subscribe',
        cancelSub: 'Unsubscribe',
        editSub: 'Edit subscription',
        peopleSub: ' people subscribed',
        noSub: 'No subscribed',
        cancelSubSuccess: 'Unsubscribe successfully',
        confirmcancelSub: 'Are you sure to cancel your subscription?',
        confirmcancelSub2: 'Are you sure you want to unsubscribe {name}?',
        of: 'of',
        hoursAgo: 'hours ago',
        daysAgo: 'days ago',
        monthsAgo: 'month ago',
        yearsAgo: 'years ago',
        just: 'just now',
        searchPlaceholder: 'Please search CIType',
    },
    custom_dashboard: {
        charts: 'Chart',
        newChart: 'Add Chart',
        editChart: 'Edit Chart',
        title: 'Title',
        titleTips: 'Please enter a chart title',
        calcIndicators: 'Counter',
        dimensions: 'Dimensions',
        selectDimensions: 'Please select a dimension',
        quantity: 'Quantity',
        childCIType: 'Relational CIType',
        level: 'Level',
        levelTips: 'Please enter the relationship level',
        preview: 'Preview',
        showIcon: 'Display icon',
        chartType: 'Chart Type',
        dataFilter: 'Data Filtering',
        format: 'Formats',
        fontColor: 'Font Color',
        backgroundColor: 'Background',
        chartColor: 'Chart Color',
        chartLength: 'Length',
        barType: 'Bar Type',
        stackedBar: 'Stacked Bar',
        multipleSeriesBar: 'Multiple Series Bar ',
        axis: 'Axis',
        direction: 'Direction',
        lowerShadow: 'Lower Shadow',
        count: 'Indicator',
        bar: 'Bar',
        line: 'Line',
        pie: 'Pie',
        table: 'Table',
        default: 'default',
        relation: 'Relation',
        noCustomDashboard: 'The administrator has not customized the dashboard yet',
    },
    preference_relation: {
        newServiceTree: 'Add Service Tree',
        editServiceTree: 'Edit Service Tree',
        serviceTreeName: 'Name',
        serviceTreeNamePlaceholder: 'Please enter the service tree name',
        public: 'Public',
        saveLayout: 'Save Layout',
        childNodesNotFound: 'There are no child nodes and no business relationship can be formed. Please select again!',
        tips1: 'Cannot form a view with the currently selected node, please select again!',
        tips2: 'Please enter the new serviceTree name!',
        tips3: 'Please select at least two nodes!',
        tips4: 'Leaf node must be selected',
        tips5: 'Select the tree directory node and display the service tree sub nodes as a Table',
        showLeafNode: 'Show Leaf Node',
        showTreeNode: 'Show Tree Node',
        sort: 'Sort',
        sort1: 'Leaf node information comes first',
        sort2: 'Tree node information comes first'
    },
    history: {
        ciChange: 'CI',
        relationChange: 'Relation',
        ciTypeChange: 'CIType',
        triggerHistory: 'Triggers',
        opreateTime: 'Operate Time',
        user: 'User',
        userTips: 'Enter filter username',
        filter: 'Search',
        filterOperate: 'fitler operation',
        attribute: 'Attribute',
        old: 'Old',
        new: 'New',
        noUpdate: 'No update',
        itemsPerPage: '/page',
        triggerName: 'Name',
        event: 'Event',
        action: 'Actoin',
        status: 'Status',
        done: 'Done',
        undone: 'Undone',
        triggerTime: 'Trigger Time',
        totalItems: '{total} records in total',
        pleaseSelect: 'Please select',
        startTime: 'Start Time',
        endTime: 'End Time',
        deleteCIType: 'Delete CIType',
        addCIType: 'Add CIType',
        updateCIType: 'Update CIType',
        addAttribute: 'Add Attribute',
        updateAttribute: 'Update Attribute',
        deleteAttribute: 'Delete Attribute',
        addTrigger: 'Add Trigger',
        updateTrigger: 'Update Trigger',
        deleteTrigger: 'Delete Trigger',
        addUniqueConstraint: 'Add Unique Constraint',
        updateUniqueConstraint: 'Update Unique Constraint',
        deleteUniqueConstraint: 'Delete Unique Constraint',
        addRelation: 'Add Relation',
        deleteRelation: 'Delete Relation',
        noModifications: 'No Modifications',
        attr: 'attribute',
        attrId: 'attribute id',
        changeDescription: 'attribute id: {attr_id}, {before_days} day(s) in advance, Subject: {subject}\nContent: {body}\nNotify At: {notify_at}'
    },
    relation_type: {
        addRelationType: 'New',
        nameTips: 'Please enter a type name',
    },
    ad: {
        upload: 'Import',
        download: 'Export',
        accept: 'Accept',
        acceptBy: 'Accept By',
        acceptTime: 'Accept Time',
        confirmAccept: 'Confirm Accept?',
        acceptSuccess: 'Accept successfully',
        isAccept: 'Is accept',
        deleteADC: 'Confirm to delete this data?',
        batchDelete: 'Confirm to delete this data?',
        agent: 'Built-in & Plug-ins',
        snmp: 'Network Devices',
        http: 'Public Clouds',
        rule: 'AutoDiscovery Rules',
        timeout: 'Timeout error',
        mode: 'Mode',
        collectSettings: 'Collection Settings',
        updateFields: 'Update Field',
        pluginScript: `# -*- coding:utf-8 -*-

import json
        
        
class AutoDiscovery(object):
        
    @property
    def unique_key(self):
        """
        
        :return: Returns the name of a unique attribute
        """
        return
        
    @staticmethod
    def attributes():
        """
        Define attribute fields
        :return: Returns a list of attribute fields. The list items are (name, type, description). The name must be in English.
        type: String Integer Float Date DateTime Time JSON
        For example:
        return [
            ("ci_type", "String", "CIType name"),
            ("private_ip", "String", "Internal IP, multiple values separated by commas")
        ]
        """
        return []
        
    @staticmethod
    def run():
        """
        Execution entry, returns collected attribute values
        :return: 
        Returns a list, the list item is a dictionary, the dictionary key is the attribute name, and the value is the attribute value
        For example:
        return [dict(ci_type="server", private_ip="192.168.1.1")]
        """
        return []
        
        
if __name__ == "__main__":
    result = AutoDiscovery().run()
    if isinstance(result, list):
        print("AutoDiscovery::Result::{}".format(json.dumps(result)))
    else:
        print("ERROR: The collection return must be a list")
        `,
        server: 'Server',
        vserver: 'VServer',
        nic: 'NIC',
        disk: 'harddisk',
    },
    ci: {
        attributeDesc: 'Attribute Description',
        selectRows: 'Select: {rows} items',
        addRelation: 'Add Relation',
        all: 'All',
        batchUpdate: 'Batch Update',
        batchUpdateConfirm: 'Are you sure you want to make batch updates?',
        batchUpdateInProgress: 'Currently being updated in batches',
        batchUpdateInProgress2: 'Updating in batches, {total} in total, {successNum} successful, {errorNum} failed',
        batchDeleting: 'Deleting...',
        batchDeleting2: 'Deleting {total} items in total, {successNum} items successful, {errorNum} items failed',
        copyFailed: 'Copy failed',
        noLevel: 'No hierarchical relationship!',
        batchAddRelation: 'Batch Add Relation',
        history: 'History',
        topo: 'Topology',
        table: 'Table',
        m2mTips: 'The current CIType relationship is many-to-many, please go to the SerivceTree(relation view) to add or delete',
        confirmDeleteRelation: 'Confirm to delete the relationship?',
        tips1: 'Use commas to separate multiple values',
        tips2: 'The field can be modified as needed. When the value is empty, the field will be left empty.',
        tips3: 'Please select the fields that need to be modified',
        tips4: 'At least one field must be selected',
        tips5: 'Search name | alias',
        tips6: 'Speed ​​up retrieval, full-text search possible, no need to use conditional filtering\n\n json/link/password currently does not support indexing \n\nText characters longer than 190 cannot be indexed',
        tips7: 'The form of expression is a drop-down box, and the value must be in the predefined value',
        tips8: 'Multiple values, such as intranet IP',
        tips9: 'For front-end only',
        tips10: 'Other attributes of the CIType are computed using expressions\n\nA code snippet computes the returned value.',
        newUpdateField: 'Add a Attribute',
        attributeSettings: 'Attribute Settings',
        share: 'Share',
        noPermission: 'No Permission'
    },
    serviceTree: {
        remove: 'Remove',
        deleteNode: 'Delete {name}',
        tips1: 'For example: q=os_version:centos&sort=os_version',
        tips2: 'Expression search',
        alert1: 'The administrator has not configured the ServiceTree(relation view), or you do not have permission to access it!',
        copyFailed: 'Copy failed',
        deleteRelationConfirm: 'Confirm to remove selected {name} from current relationship?',
        batch: 'Batch',
        editNode: 'Edit Node',
        editNodeName: 'Edit Node Name',
        grantTitle: 'Grant(read)',
        userPlaceholder: 'Please select users',
        rolePlaceholder: 'Please select roles',
        grantedByServiceTree: 'Granted By Service Tree:',
        grantedByServiceTreeTips: 'Please delete id_filter in Servive Tree',
        peopleHasRead: 'Personnel authorized to read:',
        authorizationPolicy: 'CI Authorization Policy:',
        idAuthorizationPolicy: 'Authorized by node:',
        view: 'View permissions'
    },
    tree: {
        tips1: 'Please go to Preference page first to complete your subscription!',
        subSettings: 'Settings',
    }
}
export default cmdb_en
