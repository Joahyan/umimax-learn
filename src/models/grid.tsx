import { SpanConfig } from '@/entities/spanConfig';
import storage from 'good-storage';
import { useState, useCallback } from 'react';
export default () => {
  const [spanConf, setSpan] = useState<SpanConfig>({});

  const setSpanConf = useCallback((props: SpanConfig) => {
    setSpan(props);
    storage.set('spanConfig', props);
  }, []);

  const getSpanConf = useCallback(() => {
    let tempSpanConfig = { xxl: 1600, xl: 1200, lg: 992, md: 768, sm: 576, xs: 300 };
    try {
      tempSpanConfig = storage.get('spanConfig');
    } catch (error) {}
    let { xxl, xl, lg, md, sm, xs } = tempSpanConfig;
    return {
      screenXXL: xxl,
      screenXL: xl,
      screenLG: lg,
      screenMD: md,
      screenSM: sm,
      screenXS: xs,
      screenXXLMin: xxl,
      screenXLMin: xl,
      screenLGMin: lg,
      screenMDMin: md,
      screenSMMin: sm,
      screenXSMin: xs,
      screenXLMax: xxl - 1,
      screenLGMax: xl - 1,
      screenMDMax: lg - 1,
      screenSMMax: md - 1,
      screenXSMax: sm - 1
    };
  }, []);

  return { spanConf, setSpanConf, getSpanConf };
};
