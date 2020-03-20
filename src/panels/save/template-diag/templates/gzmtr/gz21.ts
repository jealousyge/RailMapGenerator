export default {
    svg_height: 300,
    svg_width: 1150,
    svg_dest_width: 1150,
    show_outer: true,
    padding: 3.9867746418132155,
    y_pc: 47.44401544401544,
    strip_pc: 90,
    branch_spacing: 45,
    theme: ['guangzhou', 'gz21', '#201747', '#fff'],
    direction: 'l',
    current_stn_idx: 'iwf6',
    platform_num: '2',
    txt_bg_gap: 15,
    txt_flip: true,
    stn_list: {
        linestart: {
            parents: [],
            children: ['hnni'],
            name: ['路綫左端', 'LEFT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        l1mz: {
            parents: ['9v2d'],
            children: ['iwf6'],
            name: ['钟岗', 'Zhonggang'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '20',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        iwf6: {
            children: ['lineend'],
            parents: ['l1mz'],
            name: ['增城广场', 'Zengcheng Square'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '21',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local', 'express'],
        },
        '9v2d': {
            parents: ['cnah'],
            children: ['l1mz'],
            name: ['山田', 'Shantian'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '19',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        cnah: {
            parents: ['em2j'],
            children: ['9v2d'],
            name: ['朱村', 'Zhucun'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '18',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        em2j: {
            parents: ['fjhm'],
            children: ['cnah'],
            name: ['凤岗', 'Fenggang'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '17',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local', 'express'],
        },
        fjhm: {
            parents: ['3x3q'],
            children: ['em2j'],
            name: ['坑贝', 'Kengbei'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '16',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        '3x3q': {
            parents: ['x3vj'],
            children: ['fjhm'],
            name: ['中新', 'Zhongxin'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '15',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        x3vj: {
            parents: ['0cq2'],
            children: ['3x3q'],
            name: ['镇龙', 'Zhenlong'],
            change_type: 'int2',
            interchange: [[['guangzhou', 'gz14', '#81312f', '#fff', '14号线', 'Line 14']]],
            branch: { left: [], right: [] },
            num: '14',
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gz14', '#81312f', '#fff', '14号线', 'Line 14']]],
            },
            services: ['local', 'express'],
        },
        '0cq2': {
            parents: ['eihp'],
            children: ['x3vj'],
            name: ['镇龙西', 'Zhenglongxi'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '13',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        eihp: {
            parents: ['v68c'],
            children: ['0cq2'],
            name: ['金坑', 'Jinkeng'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '12',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        v68c: {
            parents: ['r56c'],
            children: ['eihp'],
            name: ['长平', 'Changping'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '11',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        r56c: {
            parents: ['vxxf'],
            children: ['v68c'],
            name: ['水西', 'Shuixi'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '10',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        vxxf: {
            parents: ['0w0o'],
            children: ['r56c'],
            name: ['苏元', 'Suyuan'],
            change_type: 'int2',
            interchange: [[['guangzhou', 'gz6', '#80225f', '#fff', '6号线', 'Line 6']]],
            branch: { left: [], right: [] },
            num: '09',
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gz6', '#80225f', '#fff', '6号线', 'Line 6']]],
            },
            services: ['local', 'express'],
        },
        '0w0o': {
            parents: ['xclf'],
            children: ['vxxf'],
            name: ['科学城', 'Science City'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '08',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        xclf: {
            parents: ['vatj'],
            children: ['0w0o'],
            name: ['神舟路', 'Shenzhoulu'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '07',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        vatj: {
            parents: ['o60v'],
            children: ['xclf'],
            name: ['天河智慧城', 'Tianhe Smart City'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '06',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        o60v: {
            parents: ['e3we'],
            children: ['vatj'],
            name: ['大观南路', 'Daguannanlu'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '05',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local', 'express'],
        },
        e3we: {
            parents: ['oecp'],
            children: ['o60v'],
            name: ['黄村', 'Huangcun'],
            change_type: 'int2',
            interchange: [[['guangzhou', 'gz4', '#00843d', '#fff', '4号线', 'Line 4']]],
            branch: { left: [], right: [] },
            num: '04',
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gz4', '#00843d', '#fff', '4号线', 'Line 4']]],
            },
            services: ['local', 'express'],
        },
        oecp: {
            parents: ['wxqs'],
            children: ['e3we'],
            name: ['棠东', 'Tangdong'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '03',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local', 'express'],
        },
        wxqs: {
            parents: ['hnni'],
            children: ['oecp'],
            name: ['天河公园', 'Tianhe Park'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '02',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local', 'express'],
        },
        hnni: {
            parents: ['linestart'],
            children: ['wxqs'],
            name: ['员村', 'Yuancun'],
            change_type: 'int2',
            interchange: [[['guangzhou', 'gz5', '#c5003e', '#fff', '5号线', 'Line 5']]],
            branch: { left: [], right: [] },
            num: '01',
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gz5', '#c5003e', '#fff', '5号线', 'Line 5']]],
            },
            services: ['local', 'express'],
        },
    },
    line_name: ['21号线', 'Line 21'],
    dest_legacy: true,
    char_form: 'cn',
    psd_num: 1,
    line_num: '21',
    info_panel_type: 'gz1421',
    direction_gz_x: 41.194337194337194,
    direction_gz_y: 81.38996138996139,
};
