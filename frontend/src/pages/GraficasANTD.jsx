import React from "react";
import DemoLineBasic, {
    DemoLineBasic2, DemoLineMulti, DemoLineStep,
    DemoAreaBasic, DemoAreaStacked, DemoAreaPercent, DemoColumnBasic,
    DemoColumnStacked, DemoColumnGrouped, DemoColumnPercent, DemoColumnRange,
    DemoBarBasic, DemoPieBasic, DemoPieBasic2, DemoPieQuarter, DemoPieinteraction,
    DemoPieDonut, DemoPieDonutstatistics, DemoDualAxes, DemoGauge, DemoLiquid,
    DemoLiquidStart, DemoLiquidHeart, DemoScattermapping, DemoScatterregression,
    DemoScatterBubblequadrant, DemoPieCustom, DemoPieCustomstatestyle,
    DemoColumnLegend, DemoHeatmapBasic, DemoHeatmapCalendar, DemoHeatmapPolar,
    DemoHeatmapShape, DemoHeatmapmapping, DemoHeatmapDensity, DemoTreemapBasic,
    DemoTreemapDrill, DemoRadarBasic, DemoRadar, DemoRadarWithGrid, DemoRadarwithAlternateGrid,
    DemoRadarArea, DemoRoseBasic, DemoRoseinnerlabel, DemoRoseState, DemoRoseElementActio,
    DemoRoseGrouped, DemoRosestacked, DemoChord, DemoSunburstBasic, DemoSunburstColor, DemoSunburstlabel,
    DemoRadialBar, DemoRadialBarColor, DemoRadialBarStacked, DemoRadialBarBackground, DemoRadialBarLine,
    DemoRadialBarActivity, DemoCirclePacking, DemoCirclePackingNest, DemoCirclePackingDisplaylabel,
    DemoCirclePackingCustom, DemoVennBasic, DemoVennColor, DemoVennFormatterTooltip, DemoVennLabel,
    DemoVennCustomize, DemoVennElementAction, DemoStockBasic, DemoStockCustom, DemoWordCloudBasic,
    DemoWordCloudmask, DemoWordCloudbase64, DemoWordCloudField, DemoWordCloudunchanged, DemoWordCloudDouBan,
    DemoDecompositionTreeGraphBasic, DemoDecompositionTreeGraphstroke, DemoFlowAnalysisGraphBasic, DemoFlowAnalysisGraphLayout,
    DemoFundFlowGraph, DemoOrganizationGraphBasic, DemoOrganizationGraphStyle, DemoOrganizationGraphCustom,
    DemoRadialGraph, DemoRadialTreeGraphLayout, DemoRadialTreeGraphStyle,
} from '../components/Global/GraficasComponentANTD'


//MIU
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const GraficasANTD = () => {
    return (<>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: '100%', height: '98%', }, }}>
            <Grid container spacing={1}>
                <Grid item xs={6}><DemoLineBasic /> </Grid>
                <Grid item xs={6}><DemoLineBasic2 /></Grid>

                <Grid item xs={6}><DemoLineMulti /> </Grid>
                <Grid item xs={6}><DemoLineStep /></Grid>

                <Grid item xs={6}><DemoAreaBasic /></Grid>
                <Grid item xs={6}><DemoAreaStacked /></Grid>
                <Grid item xs={6}><DemoAreaPercent /></Grid>

                <Grid item xs={6}><DemoColumnBasic /></Grid>
                <Grid item xs={6}><DemoColumnStacked /></Grid>
                <Grid item xs={6}><DemoColumnGrouped /></Grid>
                <Grid item xs={6}><DemoColumnPercent /></Grid>
                <Grid item xs={6}><DemoColumnRange /></Grid>

                <Grid item xs={6}><DemoBarBasic /></Grid>

                <Grid item xs={6}><DemoPieBasic /></Grid>
                <Grid item xs={6}><DemoPieBasic2 /></Grid>
                <Grid item xs={6}><DemoPieQuarter /></Grid>
                <Grid item xs={6}><DemoPieinteraction /></Grid>
                <Grid item xs={6}><DemoPieDonut /></Grid>
                <Grid item xs={6}><DemoPieDonutstatistics /></Grid>

                <Grid item xs={6}><DemoDualAxes /></Grid>
                <Grid item xs={6}><DemoGauge /></Grid>

                <Grid item xs={6}><DemoLiquid /></Grid>
                <Grid item xs={6}><DemoLiquidStart /></Grid>
                <Grid item xs={6}><DemoLiquidHeart /></Grid>

                <Grid item xs={6}><DemoScattermapping /></Grid>
                <Grid item xs={6}><DemoScatterregression /></Grid>
                <Grid item xs={6}><DemoScatterBubblequadrant /></Grid>

                <Grid item xs={6}><DemoPieCustom /></Grid>
                <Grid item xs={6}><DemoPieCustomstatestyle /></Grid>
                <Grid item xs={6}><DemoColumnLegend /></Grid>

                <Grid item xs={6}><DemoHeatmapBasic /></Grid>
                <Grid item xs={6}><DemoHeatmapCalendar /></Grid>
                <Grid item xs={6}><DemoHeatmapPolar /></Grid>
                <Grid item xs={6}><DemoHeatmapShape /></Grid>
                <Grid item xs={6}><DemoHeatmapmapping /></Grid>
                <Grid item xs={6}><DemoHeatmapDensity /></Grid>

                <Grid item xs={6}><DemoTreemapBasic /></Grid>
                <Grid item xs={6}><DemoTreemapDrill /></Grid>

                <Grid item xs={6}><DemoRadarBasic /></Grid>
                <Grid item xs={6}><DemoRadar /></Grid>
                <Grid item xs={6}><DemoRadarWithGrid /></Grid>
                <Grid item xs={6}><DemoRadarwithAlternateGrid /></Grid>
                <Grid item xs={6}><DemoRadarArea /></Grid>

                <Grid item xs={6}><DemoRoseBasic /></Grid>
                <Grid item xs={6}><DemoRoseinnerlabel /></Grid>
                <Grid item xs={6}><DemoRoseState /></Grid>
                <Grid item xs={6}><DemoRoseElementActio /></Grid>

                <Grid item xs={6}><DemoRoseGrouped /></Grid>
                <Grid item xs={6}><DemoRosestacked /></Grid>
                <Grid item xs={6}><DemoChord /></Grid>

                <Grid item xs={6}><DemoSunburstBasic /></Grid>
                <Grid item xs={6}><DemoSunburstColor /></Grid>
                <Grid item xs={6}><DemoSunburstlabel /></Grid>
                <Grid item xs={6}><DemoRadialBar /></Grid>
                <Grid item xs={6}><DemoRadialBarColor /></Grid>
                <Grid item xs={6}><DemoRadialBarStacked /></Grid>
                <Grid item xs={6}><DemoRadialBarBackground /></Grid>
                <Grid item xs={6}><DemoRadialBarLine /></Grid>
                <Grid item xs={6}><DemoRadialBarActivity /></Grid>


                <Grid item xs={6}><DemoCirclePacking /></Grid>
                <Grid item xs={6}><DemoCirclePackingNest /></Grid>
                <Grid item xs={6}><DemoCirclePackingDisplaylabel /></Grid>
                <Grid item xs={6}><DemoCirclePackingCustom /></Grid>

                <Grid item xs={6}><DemoVennBasic /></Grid>
                <Grid item xs={6}><DemoVennColor /></Grid>
                <Grid item xs={6}><DemoVennFormatterTooltip /></Grid>
                <Grid item xs={6}><DemoVennLabel /></Grid>
                <Grid item xs={6}><DemoVennCustomize /></Grid>
                <Grid item xs={6}><DemoVennElementAction /></Grid>

                <Grid item xs={6}><DemoStockBasic /></Grid>
                <Grid item xs={6}><DemoStockCustom /></Grid>

                <Grid item xs={6}><DemoWordCloudBasic /> </Grid>
                <Grid item xs={6}><DemoWordCloudmask /></Grid>
                <Grid item xs={6}><DemoWordCloudbase64 /> </Grid>
                <Grid item xs={6}><DemoWordCloudField /></Grid>
                <Grid item xs={6}><DemoWordCloudunchanged /> </Grid>
                <Grid item xs={6}><DemoWordCloudDouBan /></Grid>

                <Grid item xs={6}><DemoDecompositionTreeGraphBasic /> </Grid>
                <Grid item xs={6}><DemoDecompositionTreeGraphstroke /> </Grid>
                <Grid item xs={6}><DemoFlowAnalysisGraphBasic /> </Grid>
                <Grid item xs={6}><DemoFlowAnalysisGraphLayout /> </Grid>
                <Grid item xs={6}><DemoFundFlowGraph /> </Grid>
                <Grid item xs={6}><DemoOrganizationGraphBasic /> </Grid>
                <Grid item xs={6}><DemoOrganizationGraphStyle /> </Grid>
                <Grid item xs={6}><DemoOrganizationGraphCustom /> </Grid>
                <Grid item xs={6}><DemoRadialGraph /> </Grid>
                <Grid item xs={6}><DemoRadialTreeGraphLayout /> </Grid>
                <Grid item xs={6}><DemoRadialTreeGraphStyle /> </Grid>
            </Grid>
        </Box>

    </>
    );
}


export default GraficasANTD;