const params = {
    style: 'gzmtr',
    svg_height: 300,
    padding: 8.750201061605276,
    y_pc: 40,
    branch_spacing: 45,
    theme: ['foshan', 'fs13', '#32B7EA', '#fff'],
    direction: 'l',
    current_stn_idx: 'iwf6',
    platform_num: '2',
    stn_list: {
        linestart: {
            parents: [],
            children: ['4u05'],
            name: ['路綫左端', 'LEFT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        l1mz: {
            parents: ['68pn'],
            children: ['iwf6'],
            name: ['华翠路', 'Huacuilu'],
            branch: { left: [], right: [] },
            num: '02',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['lineend'],
            parents: ['l1mz'],
            name: ['𧒽岗', 'Leigang'],
            branch: { left: [], right: [] },
            num: '01',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['foshan', 'fs1', '#C4D600', '#fff', '广佛线', 'Guangfo Line']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '68pn': {
            name: ['夏西', 'Xiaxi'],
            secondaryName: false,
            num: '03',
            services: ['local'],
            parents: ['9bbi'],
            children: ['l1mz'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        '9bbi': {
            name: ['夏东', 'Xiadong'],
            secondaryName: false,
            num: '04',
            services: ['local'],
            parents: ['qt2o'],
            children: ['68pn'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        qt2o: {
            name: ['康怡公园', 'Kangyigongyuan'],
            secondaryName: false,
            num: '05',
            services: ['local'],
            parents: ['wjfh'],
            children: ['9bbi'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        wjfh: {
            name: ['平西', 'Pingxi'],
            secondaryName: false,
            num: '06',
            services: ['local'],
            parents: ['nxbx'],
            children: ['qt2o'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        nxbx: {
            name: ['平南', 'Pingnan'],
            secondaryName: false,
            num: '07',
            services: ['local'],
            parents: ['shqx'],
            children: ['wjfh'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        shqx: {
            name: ['玉器街', 'Yuqijie'],
            secondaryName: false,
            num: '08',
            services: ['local'],
            parents: ['7ud9'],
            children: ['nxbx'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        '7ud9': {
            name: ['中区', 'Zhongqu'],
            secondaryName: false,
            num: '09',
            services: ['local'],
            parents: ['dcct'],
            children: ['shqx'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        dcct: {
            name: ['三山新城北', 'Sanshanxinchengbei'],
            secondaryName: false,
            num: '10',
            services: ['local'],
            parents: ['n6kk'],
            children: ['7ud9'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        n6kk: {
            name: ['文翰湖公园', 'Wenhanhu Park'],
            secondaryName: false,
            num: '11',
            services: ['local'],
            parents: ['d8sv'],
            children: ['dcct'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        d8sv: {
            name: ['三山新城南', 'Sanshanxinchengnan'],
            secondaryName: false,
            num: '12',
            services: ['local'],
            parents: ['kc75'],
            children: ['n6kk'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        kc75: {
            name: ['林岳北', 'Linyue Bei'],
            secondaryName: false,
            num: '13',
            services: ['local'],
            parents: ['lelw'],
            children: ['d8sv'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        lelw: {
            name: ['林岳西', 'Linyue Xi'],
            secondaryName: false,
            num: '14',
            services: ['local'],
            parents: ['4u05'],
            children: ['kc75'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['foshan', 'fs2', '#DD0027', '#fff', '2号线', 'Line 2']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '4u05': {
            name: ['林岳东', 'Linyue Dong'],
            secondaryName: false,
            num: '15',
            services: ['local'],
            parents: ['linestart'],
            children: ['lelw'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['foshan', 'fs2', '#DD0027', '#fff', '2号线', 'Line 2']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
    },
    line_name: ['南海有轨1号线', 'TNH1'],
    psd_num: '1',
    line_num: 'TNH1',
    info_panel_type: 'gz6',
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: { isLegacy: false, terminal: false },
    svgWidth: { destination: 1000, runin: 1000, railmap: 1500, indoor: 800 },
    notesGZMTR: [
        [
            '南海有轨电车1号线（文翰湖公园-林岳东）尚未开通。',
            'TNH1 (Wenhanhu Park-Linyue Dong) is under construction.',
            16,
            52,
            true,
        ],
    ],
    namePosMTR: { isStagger: true, isFlip: false },
};

export default params;
